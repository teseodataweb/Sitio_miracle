/**
 * Cookie Consent Banner - Concretos Miracle
 * Cumple con requisitos de LFPDPPP (Mexico)
 */

(function() {
    'use strict';

    // Configuracion
    const CONFIG = {
        cookieName: 'cm_cookie_consent',
        cookieExpiry: 365, // dias
        analyticsEnabled: true
    };

    // Verificar si ya se acepto el consentimiento
    function hasConsent() {
        return getCookie(CONFIG.cookieName) !== null;
    }

    // Obtener valor de cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    // Establecer cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    }

    // Obtener preferencias guardadas
    function getPreferences() {
        const consent = getCookie(CONFIG.cookieName);
        if (consent) {
            try {
                return JSON.parse(consent);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    // Guardar preferencias
    function savePreferences(preferences) {
        setCookie(CONFIG.cookieName, JSON.stringify(preferences), CONFIG.cookieExpiry);
    }

    // Crear el banner de cookies
    function createBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <h4>Utilizamos cookies</h4>
                    <p>Este sitio utiliza cookies para mejorar tu experiencia de navegacion y analizar el trafico.
                    Al hacer clic en "Aceptar todas", consientes el uso de todas las cookies.
                    Puedes gestionar tus preferencias o leer mas en nuestra
                    <a href="privacy.html">Politica de Privacidad</a>.</p>
                </div>
                <div class="cookie-banner-actions">
                    <button id="cookie-accept-all" class="cookie-btn cookie-btn-primary">Aceptar todas</button>
                    <button id="cookie-accept-essential" class="cookie-btn cookie-btn-secondary">Solo esenciales</button>
                    <button id="cookie-settings" class="cookie-btn cookie-btn-link">Configurar</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept-all').addEventListener('click', acceptAll);
        document.getElementById('cookie-accept-essential').addEventListener('click', acceptEssential);
        document.getElementById('cookie-settings').addEventListener('click', showSettings);
    }

    // Crear modal de configuracion
    function createSettingsModal() {
        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.innerHTML = `
            <div class="cookie-modal-overlay"></div>
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h4>Configuracion de Cookies</h4>
                    <button id="cookie-modal-close" class="cookie-modal-close">&times;</button>
                </div>
                <div class="cookie-modal-body">
                    <div class="cookie-option">
                        <div class="cookie-option-header">
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-essential" checked disabled>
                                <span class="cookie-slider"></span>
                            </label>
                            <span class="cookie-option-title">Cookies Esenciales</span>
                            <span class="cookie-badge">Siempre activas</span>
                        </div>
                        <p class="cookie-option-desc">Necesarias para el funcionamiento basico del sitio web. No pueden ser desactivadas.</p>
                    </div>
                    <div class="cookie-option">
                        <div class="cookie-option-header">
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-analytics" checked>
                                <span class="cookie-slider"></span>
                            </label>
                            <span class="cookie-option-title">Cookies Analiticas</span>
                        </div>
                        <p class="cookie-option-desc">Nos ayudan a entender como los visitantes interactuan con el sitio web mediante la recopilacion de informacion de forma anonima (Google Analytics).</p>
                    </div>
                    <div class="cookie-option">
                        <div class="cookie-option-header">
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-preferences" checked>
                                <span class="cookie-slider"></span>
                            </label>
                            <span class="cookie-option-title">Cookies de Preferencias</span>
                        </div>
                        <p class="cookie-option-desc">Permiten recordar tus preferencias de navegacion para una experiencia personalizada.</p>
                    </div>
                </div>
                <div class="cookie-modal-footer">
                    <button id="cookie-save-settings" class="cookie-btn cookie-btn-primary">Guardar preferencias</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listeners
        document.getElementById('cookie-modal-close').addEventListener('click', hideSettings);
        document.querySelector('.cookie-modal-overlay').addEventListener('click', hideSettings);
        document.getElementById('cookie-save-settings').addEventListener('click', saveSettings);
    }

    // Mostrar banner
    function showBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.add('show');
        }
    }

    // Ocultar banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 300);
        }
    }

    // Mostrar configuracion
    function showSettings() {
        let modal = document.getElementById('cookie-settings-modal');
        if (!modal) {
            createSettingsModal();
            modal = document.getElementById('cookie-settings-modal');
        }
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Ocultar configuracion
    function hideSettings() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    // Aceptar todas las cookies
    function acceptAll() {
        const preferences = {
            essential: true,
            analytics: true,
            preferences: true,
            timestamp: new Date().toISOString()
        };
        savePreferences(preferences);
        applyPreferences(preferences);
        hideBanner();
        hideSettings();
    }

    // Aceptar solo esenciales
    function acceptEssential() {
        const preferences = {
            essential: true,
            analytics: false,
            preferences: false,
            timestamp: new Date().toISOString()
        };
        savePreferences(preferences);
        applyPreferences(preferences);
        hideBanner();
        hideSettings();
    }

    // Guardar configuracion personalizada
    function saveSettings() {
        const preferences = {
            essential: true,
            analytics: document.getElementById('cookie-analytics').checked,
            preferences: document.getElementById('cookie-preferences').checked,
            timestamp: new Date().toISOString()
        };
        savePreferences(preferences);
        applyPreferences(preferences);
        hideBanner();
        hideSettings();
    }

    // Aplicar preferencias
    function applyPreferences(preferences) {
        // Deshabilitar Google Analytics si no se acepto
        if (!preferences.analytics) {
            // Deshabilitar gtag
            window['ga-disable-G-HJNH0R759V'] = true;

            // Eliminar cookies de GA existentes
            const gaCookies = ['_ga', '_gid', '_gat'];
            gaCookies.forEach(cookie => {
                document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.concretosmiracle.com;`;
            });
        }
    }

    // Inicializar
    function init() {
        // Esperar a que el DOM este listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', onReady);
        } else {
            onReady();
        }
    }

    function onReady() {
        const preferences = getPreferences();

        if (preferences) {
            // Ya hay preferencias guardadas, aplicarlas
            applyPreferences(preferences);
        } else {
            // No hay preferencias, mostrar banner
            createBanner();
            // Pequeno delay para la animacion
            setTimeout(showBanner, 500);
        }
    }

    // Exponer funcion para reabrir configuracion
    window.openCookieSettings = function() {
        showSettings();
    };

    // Iniciar
    init();

})();
