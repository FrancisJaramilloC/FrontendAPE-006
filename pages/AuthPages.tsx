import React from 'react';
import { Page, NavigationProps } from '../types';

export const LoginPage: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="font-display bg-background-light text-text-light flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <div className="bg-card-light rounded-xl shadow-soft p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1VGLnotEvh4uk6HDAzaOJ9ias7fQRcZeJ_AW_H-BcBt7JnDFQZ72TtrJes0ZwRvY-FkRM1PjAefCN5Y9fTriuLy3mhrHMFfytD3bwlS-LfCZG1D0FRPHVbbU3e33VZx_L_bO7zyhCXmU5VeOPHrKrnFhaMHK3pnSIGnVpBqI5qJh7EI-D44UUAd1hxK0CraTOXuXLNm0cqIDG2PR_YDam_GQHaw_m9qzqgRkRVlfiyKmiDLIs7xJUxUGQdFBgscJoz6qEMgHLDvgM')"
                }}
              ></div>
              <h1 className="text-text-light text-2xl font-bold">Truekealo</h1>
            </div>
            <h2 className="text-3xl font-bold text-text-light mb-6">Bienvenido de nuevo</h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPage(Page.Dashboard);
            }}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="text-sm font-medium text-text-light mb-2 block" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="w-full rounded-lg border-border-light focus:ring-primary focus:border-primary p-3 bg-white"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                type="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-text-light mb-2 block" htmlFor="password">
                Contraseña
              </label>
              <input
                className="w-full rounded-lg border-border-light focus:ring-primary focus:border-primary p-3 bg-white"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-wide mt-2 hover:bg-opacity-90 transition-opacity"
            >
              <span className="truncate">Iniciar Sesión</span>
            </button>
          </form>
          <div className="text-center mt-6">
            <button
              onClick={() => setPage(Page.ForgotPassword)}
              className="text-sm font-medium text-primary hover:underline bg-transparent border-none cursor-pointer"
            >
              ¿Olvidaste tu contraseña?
            </button>
            <p className="text-sm text-text-muted-light mt-4">
              ¿No tienes cuenta?{' '}
              <button
                onClick={() => setPage(Page.Register)}
                className="font-medium text-primary hover:underline bg-transparent border-none cursor-pointer"
              >
                Regístrate aquí
              </button>
            </p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-light"></div>
              </div>
              <div className="relative bg-card-light px-3">
                <p className="text-sm text-text-muted-light">o continúa con</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="flex items-center justify-center size-12 rounded-full border border-border-light hover:bg-gray-50 bg-white">
                <img
                  alt="Google logo"
                  className="h-6 w-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKhL-DvYzneqscZZijUrBp4y6Ud8JEVM25dI8toM2inVjYPcHlypgZFH_hTJCyRrzLedndw84ek1JnN2LBgdrrb8ZBxUABdO0ZM9UkADP_RZbmwSKoiJdZmnGDYkwuHYAAvyCd-U9TblObzl-gNT1E9VVWTXoWhl_VBDEM46VE3LtX5WX69AdiBrQqJievENdvBC49UvH-f0jgOL_hz8N59iBqmAC9I1v8QnSf0iGlVriYCVfWPPqB1H1dvkdCOWW5ymcJCnrf-MuI"
                />
              </button>
              <button className="flex items-center justify-center size-12 rounded-full border border-border-light hover:bg-gray-50 bg-white">
                <img
                  alt="Facebook logo"
                  className="h-6 w-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrKPo-FsAUe8aNWmgXxxNlq5NaUVBoOfBEyDe287r52NGV9wMB_0CLH4_Rpv8jspG6m-N_UQSLKSmfgRlBLZT5TDuB0egb0pcEDeaQ9MpaZJ2Ehu_Yc1PYwo5BUyg_zAFO4bq3Jksxj39YAQaj1SBr62P9xTqwOtZoror5GwIQHAuyL1FOkiQoUdrKO7TWJ27xX1ZlOBdLxci4ngtPJ60sZ9cMP3irdu6j6Xuo2mWt_5liX0YuFFcmVBD40AmyLLumr5LIaNQ5Q4Jl"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RegisterPage: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4 dark:bg-background-dark">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-soft dark:bg-[#2C1E1C]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-[#414141] dark:text-white">Truekealo</h2>
          <div className="flex w-full flex-col items-center gap-6">
            <h1 className="text-[#1b100e] text-center text-3xl font-bold tracking-tight dark:text-white">
              Únete a la comunidad
            </h1>
            <form 
              className="flex w-full flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setPage(Page.Login);
              }}
            >
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#414141] dark:text-gray-300">
                  Nombre completo
                </p>
                <input
                  className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#E7D3D0] bg-background-light p-3 text-base font-normal text-[#1b100e] placeholder:text-[#97594E] focus:border-primary focus:outline-0 focus:ring-0 dark:border-[#54423E] dark:bg-[#3D2D2A] dark:text-white dark:placeholder:text-gray-400"
                  placeholder="Introduce tu nombre completo"
                  type="text"
                />
              </label>
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#414141] dark:text-gray-300">
                  Correo electrónico
                </p>
                <input
                  className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#E7D3D0] bg-background-light p-3 text-base font-normal text-[#1b100e] placeholder:text-[#97594E] focus:border-primary focus:outline-0 focus:ring-0 dark:border-[#54423E] dark:bg-[#3D2D2A] dark:text-white dark:placeholder:text-gray-400"
                  placeholder="tu.correo@ejemplo.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#414141] dark:text-gray-300">
                  Contraseña
                </p>
                <div className="relative flex w-full items-center">
                  <input
                    className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#E7D3D0] bg-background-light p-3 pr-10 text-base font-normal text-[#1b100e] placeholder:text-[#97594E] focus:border-primary focus:outline-0 focus:ring-0 dark:border-[#54423E] dark:bg-[#3D2D2A] dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Introduce tu contraseña"
                    type="password"
                  />
                  <button
                    className="material-symbols-outlined absolute right-3 text-lg text-[#97594E] dark:text-gray-400 bg-transparent border-none"
                    type="button"
                  >
                    visibility
                  </button>
                </div>
              </label>
              <label className="flex flex-col">
                <p className="pb-2 text-sm font-medium text-[#414141] dark:text-gray-300">
                  Confirmar contraseña
                </p>
                <div className="relative flex w-full items-center">
                  <input
                    className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#E7D3D0] bg-background-light p-3 pr-10 text-base font-normal text-[#1b100e] placeholder:text-[#97594E] focus:border-primary focus:outline-0 focus:ring-0 dark:border-[#54423E] dark:bg-[#3D2D2A] dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Vuelve a introducir tu contraseña"
                    type="password"
                  />
                  <button
                    className="material-symbols-outlined absolute right-3 text-lg text-[#97594E] dark:text-gray-400 bg-transparent border-none"
                    type="button"
                  >
                    visibility
                  </button>
                </div>
              </label>
              <div className="flex items-center gap-2 pt-2">
                <input
                  className="form-checkbox h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  id="terms"
                  type="checkbox"
                />
                <label className="text-sm text-[#414141] dark:text-gray-300" htmlFor="terms">
                  Acepto los <a className="font-medium text-primary hover:underline" href="#">Términos y Condiciones</a>
                </label>
              </div>
              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary bg-gradient-to-b from-primary to-[#D4442A] px-4 py-2.5 text-base font-bold text-white shadow-sm transition-all hover:opacity-90 active:scale-95">
                Crear Cuenta
              </button>
            </form>
            <p className="text-sm text-[#414141] dark:text-gray-300">
              ¿Ya tienes cuenta?{' '}
              <button 
                onClick={() => setPage(Page.Login)}
                className="font-medium text-primary hover:underline bg-transparent border-none cursor-pointer"
              >
                Inicia sesión
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ForgotPasswordPage: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="font-display bg-background-light text-text-light flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <div className="bg-card-light rounded-xl shadow-soft p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center size-16 bg-primary/10 rounded-full">
              <span className="material-symbols-outlined text-primary text-4xl">lock</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-text-light mb-4">Recuperar Contraseña</h2>
          <p className="text-text-muted-light mb-8">
            Ingresa tu correo electrónico y te enviaremos las instrucciones para restablecer tu cuenta.
          </p>
          <form
            className="flex flex-col gap-5 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              setPage(Page.Login);
            }}
          >
            <div>
              <label className="text-sm font-medium text-text-light mb-2 block" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="w-full rounded-lg border-border-light focus:ring-primary focus:border-primary p-3 bg-white"
                id="email"
                name="email"
                placeholder="tu@correo.com"
                type="email"
              />
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-wide mt-2 hover:bg-opacity-90 transition-opacity"
            >
              <span className="truncate">Enviar Instrucciones</span>
            </button>
          </form>
          <div className="text-center mt-8">
            <button
              onClick={() => setPage(Page.Login)}
              className="text-sm font-medium text-primary hover:underline bg-transparent border-none cursor-pointer"
            >
              Volver al Inicio de Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
