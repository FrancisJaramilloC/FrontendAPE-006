import React from 'react';
import { Page, NavigationProps } from '../types';

export const DashboardPage: React.FC<NavigationProps> = ({ setPage }) => {
  const recommendations = [
    { title: "Sillón de Madera", user: "Elena V.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDtdI_sz8DiF9NDjz9oRUjM9gkOtw36hBFxwOMUqWSEzYkx6Q_0iz5JKkU0Bz-EmzVTzyl7mhiI3cgToa7kqmxAD_FTMdAKSPX6ed6247IfCh7_BB5CpubYiRxpVwK479uC-kJ5UW5S5wCEQM8IGH-gwJ5io10ju3C7bDeB4G6w1E7bu3ueDSoFuu_aOc20YnZPnAZjTwpwhlHfC2IpLgs1JyxZMrJfJG6xT6bOxM2XDlBxGkhe2AWhZmXKgyImdDZqpX0TuVkclb6" },
    { title: "Cámara de Film Vintage", user: "Javier M.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC" },
    { title: "Colección de Vinilos", user: "Sofia L.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NuesndynYPqypyPSQHTCIH9CgJ82aT2aX4uJKpxYIT4ianT4_MUxvm_NdOIFrOzt8B_6AIXET0mFoBDZhwoO6Q-njjhoQYzGEjGyiEPcn1LoixkYt6lQcUUkUYdLfsXpy7mrqIF8xx5YIUJOhjlTmv-0RW3CUDkXPnxjp9oCixxNrlJetXr_KOAOQi7S3kysBM9kzuBILemViFrf_AleWNULrf5pV5UTtB3OcpsyleRmUrN6X0_PQ0JXccZDVP7u3Ftf0QmLB0JN" },
    { title: "Planta Monstera", user: "Ana P.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAwwg_MVDdg_Ae4doh4nn53KSRbpf2lBtKARU3m2nFJhLx0VlrwAdRRg-LqCAhQZo6m8v8Y04-t-0N3CJQ5RJp4zGxJZzH96vLPXB48Q_nlT_rPai4mjq0ih6h03EuZOu3puc96IOlrDT9bOsfg-ecZ3eTvnnRS_CdUJ2t8VQzIPKrdNqH5EE6ObubaFSCpn8BcIpoorZGr8kFptaUA-LKhJodd78Jbo1YNE9PPlysSd1XffVN6GiXJDuvpmGMLztoLLl7FBixagAp" },
    { title: "Libros Clásicos", user: "David R.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChuHx4wdXTG_2xsOTUYlVb9CFVp6aGqtdFJfDp02Av4wezxI4bNGXh6B4P8SSgjUELzkioEQBOR4YI4FpSBsF0Lp8eT6mKY5yczW7BtI_OMETDxHyEx6pHSYiuOTjhxAz6PWUS8G0ZW0Ot1Gu3ZlpbzdJtDeg6yyF81N7jvfFUH4DPIzRsIMmyxzCGhPs4ZLarrOYOybcrQtMhDhoQiJZGM5okDNUFUMLuDuUCs7wllPuiVVXMuYqDs0VLPmMDGO4zlDlff8GMS1wR" },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
          Hola, Alex!
        </p>
      </div>

      <section className="w-full">
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">
          Solicitudes Pendientes
        </h2>
        <div className="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex items-start gap-4 flex-1">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[70px] w-[70px] shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD27vGwdNYIpC3xfXbMT2uV87xvLQo8oih0Ktd5b9qwKLQdYigF9IWh2avrZKmyHCjf_SxXYJC9No81RH84KhYHWJZG6TNcYkckc7xMcx9SJqs92tozQv9yrTC5DHCVyfeaisR3TimWzrLhLxBNCMq6qNHTnKRHY_-_-sBPhaDqckHPXxGbvxZXgT66Is-LORmnIRKxIA_x5GHc79IzaY__pZYh_ZxygNb-nrBvqItrssdrEAF_RzDw-ptaAJT6Vhcb3wQDkAFkdtCt')" }}
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                  Mariana quiere tu 'Lámpara Vintage'
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  A cambio de su 'Juego de Tazas de Cerámica'
                </p>
              </div>
            </div>
            <div className="flex gap-3 self-end sm:self-center">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-text-muted-light dark:border-text-muted-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-800">
                <span className="truncate">Rechazar</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90">
                <span className="truncate">Aceptar</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex items-start gap-4 flex-1">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[70px] w-[70px] shrink-0"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp5LjDm_bpBRauyc3C1fFXnaRqPL0_MXlohjYMTHJmz2l4bUnYQwjj7uMrFzUvWmbyFa2Iyqc6UCu_3bStAYB6gPKowTL0PvX2G-ncxz57ICVTbAGZB0q1wtvXUEK2Na3twPvZ0p7dOkBf4sNbhj128cSIPzGu-0vvx5RJH6nf86MBPVEzY4ttztphlR1nDekCP7hOMWzkI81aWS_2ZoAen8a1XN9UjAZXebciZG21UYtS44nMridacTh4OEwnADnkog_TRAaUX--M')" }}
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                  Carlos quiere tu 'Bicicleta Antigua'
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  A cambio de su 'Set de Herramientas Bosch'
                </p>
              </div>
            </div>
            <div className="flex gap-3 self-end sm:self-center">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 border border-text-muted-light dark:border-text-muted-dark text-text-light dark:text-text-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-800">
                <span className="truncate">Rechazar</span>
              </button>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90">
                <span className="truncate">Aceptar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10">
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">
          Recomendados para ti
        </h2>
        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto pb-4 -mx-8 px-8 scrollbar-hide"
          >
            {recommendations.map((item, idx) => (
              <div key={idx} className="flex flex-col w-60 shrink-0 cursor-pointer" onClick={() => setPage(Page.MakeOffer)}>
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl w-full hover:scale-105 transition-transform"
                  style={{ backgroundImage: `url('${item.img}')` }}
                ></div>
                <div className="mt-3">
                  <p className="text-text-light dark:text-text-dark font-medium">
                    {item.title}
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    por {item.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const ExplorePage: React.FC<NavigationProps> = ({ setPage }) => {
  const items = [
    { title: "Sillón de Madera", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDtdI_sz8DiF9NDjz9oRUjM9gkOtw36hBFxwOMUqWSEzYkx6Q_0iz5JKkU0Bz-EmzVTzyl7mhiI3cgToa7kqmxAD_FTMdAKSPX6ed6247IfCh7_BB5CpubYiRxpVwK479uC-kJ5UW5S5wCEQM8IGH-gwJ5io10ju3C7bDeB4G6w1E7bu3ueDSoFuu_aOc20YnZPnAZjTwpwhlHfC2IpLgs1JyxZMrJfJG6xT6bOxM2XDlBxGkhe2AWhZmXKgyImdDZqpX0TuVkclb6", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuApLHY6bLg3VONPyu4qGLYBmBzYu9qT29zC58eoy3-ZAI9MlSXel0E4XUdocZFWypbnzbssYtu5xSzuHiIM54iDL-AHwCFcK_SPhLyAiPsez19yfCcoQC4DA-o4PULeqNvvUSe5gOnG1oosTYdeytaENW9MXSqzy_YAOYrvIx7n_bkuGyaGLQsnFyWeHYUbbyiGC3EuJefCYePAqyF_Gu1M7KoUNyDNk7_l0BaViqF47DO8bpflDkTwhGBdlFDSseeQs4P22psBiYxN" },
    { title: "Cámara de Film Vintage", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-pjdGoojwwNEk8XtgAdeha45cZa74lzf_RMUm43McFQ5Rnt4U5ka2NJmwjtp7k1E80XNIPMaSCYJLaA1hyMEUuCWhAaujK03y_Ej8mBMqqWy2vkI5uoDIilLq6JxDU5LyN7jDp0nhB72cX8PqyGYn3g2w0q9x0TfHcyU3Pfi2k9m7-0OOxOm1X-J8PIO6pbG6Vzf6ctfRWB8517racy1GhMHTYv8LYdV04LQojLwMKAtnJqXwiwBwFjv8sUeSQByrYP2OdLpPPzBX" },
    { title: "Colección de Vinilos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NuesndynYPqypyPSQHTCIH9CgJ82aT2aX4uJKpxYIT4ianT4_MUxvm_NdOIFrOzt8B_6AIXET0mFoBDZhwoO6Q-njjhoQYzGEjGyiEPcn1LoixkYt6lQcUUkUYdLfsXpy7mrqIF8xx5YIUJOhjlTmv-0RW3CUDkXPnxjp9oCixxNrlJetXr_KOAOQi7S3kysBM9kzuBILemViFrf_AleWNULrf5pV5UTtB3OcpsyleRmUrN6X0_PQ0JXccZDVP7u3Ftf0QmLB0JN", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqo7HWFlEJZjjUXhtDQzm6VLLwm_rfWQoeoCYtK9lzx4yDBTKoRG0zVTa6SWEby-oDN38-ouzqG79u0Ww1CRpqckwNRTZP3LfMFoUZn9-U4dJFK97Gyd52SuvEb9Fwh6U9itbLmSCZD4ymYcOuOM1wwxxmSBDp0yuHhCuvQfIcwJzmWTBrtSBSjs2_bysjzGrV-3kJnIrGp1E3MNovuHEIcpDo3S5YTyjRwv0CSQDNGRSxf6uiMFllezsRi5uHPaFWj8whXJz-1m7" },
    { title: "Planta Monstera", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAwwg_MVDdg_Ae4doh4nn53KSRbpf2lBtKARU3m2nFJhLx0VlrwAdRRg-LqCAhQZo6m8v8Y04-t-0N3CJQ5RJp4zGxJZzH96vLPXB48Q_nlT_rPai4mjq0ih6h03EuZOu3puc96IOlrDT9bOsfg-ecZ3eTvnnRS_CdUJ2t8VQzIPKrdNqH5EE6ObubaFSCpn8BcIpoorZGr8kFptaUA-LKhJodd78Jbo1YNE9PPlysSd1XffVN6GiXJDuvpmGMLztoLLl7FBixagAp", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA51VUEdacmQOAQWpv6K03B-SfF3tl_dKq82QhjZszioeg6ezc0vB-KxppCrJNAZzb9O87Lpq6CueUodGKDE4FgItc96OcRngZAXSdwL36R_e5rzr4nXfMjQE2ZXydx9Z2bjUamYZfM2gmranyXkCDKnF3J7YWAagouUJRwIYt1-QJEX1BeLtChrGBTi5AyB3vPogrmxZRThAfliLvDjxE1oeuYMQfKz-bNBNL8-qt4-wK8PXV1yVezFP6j4aRjHBwJFLNGnI2a_xcV" },
    { title: "Libros Clásicos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChuHx4wdXTG_2xsOTUYlVb9CFVp6aGqtdFJfDp02Av4wezxI4bNGXh6B4P8SSgjUELzkioEQBOR4YI4FpSBsF0Lp8eT6mKY5yczW7BtI_OMETDxHyEx6pHSYiuOTjhxAz6PWUS8G0ZW0Ot1Gu3ZlpbzdJtDeg6yyF81N7jvfFUH4DPIzRsIMmyxzCGhPs4ZLarrOYOybcrQtMhDhoQiJZGM5okDNUFUMLuDuUCs7wllPuiVVXMuYqDs0VLPmMDGO4zlDlff8GMS1wR", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQDHt-dIxJwwJ9glHBlhZih80hoCNjUHu8XWUJa6u-qCJzqxOscMbOOK3NiX2m8E4FeUYkDQ65Ac4Sv5ywz4n6ltDJIIdKwNunnCAnRwnwiFujJn7NlaARL0e2W4oOsPwaODL2067hV0sZWBE1Yq25lQJmW6nLAg8pO57jk5CB4DpRRNsDnKOlCh8aAPLcRBryIR-uSTh5AyQRHTexPVVwv6EAIV20zERGAiIBF6fTDTeYWDsPX3ox3UxW1xZtE6vGDzr8EGZKkn0m" },
    { title: "Set de Herramientas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp5LjDm_bpBRauyc3C1fFXnaRqPL0_MXlohjYMTHJmz2l4bUnYQwjj7uMrFzUvWmbyFa2Iyqc6UCu_3bStAYB6gPKowTL0PvX2G-ncxz57ICVTbAGZB0q1wtvXUEK2Na3twPvZ0p7dOkBf4sNbhj128cSIPzGu-0vvx5RJH6nf86MBPVEzY4ttztphlR1nDekCP7hOMWzkI81aWS_2ZoAen8a1XN9UjAZXebciZG21UYtS44nMridacTh4OEwnADnkog_TRAaUX--M", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtGGuT5GPry5MxP4f1tx5VoFAfyqMmZg-r-YV1ohel7IZcJwiIjOIAIaYWtZCc6ZlROTP8T1cZsvZHt8yG52nbzOygmyePueQRtHasOPwstlT9aE_tiraJwUgGtc1bDZUTqZPOr6AQfuOqmMB2wXGaNGNxWbuEPc-kT_E8bcZ7Sl2WHFqcmwl5YcR--HSYcIKC96MJvE_HEe9Wdt5c8A8XLi_kwPLZNzrLsCfQBwlCsU6-54j0fkAgIq9LFNQ9NeAwkiMzokj-iaHM" },
    { title: "Juego de Tazas", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD27vGwdNYIpC3xfXbMT2uV87xvLQo8oih0Ktd5b9qwKLQdYigF9IWh2avrZKmyHCjf_SxXYJC9No81RH84KhYHWJZG6TNcYkckc7xMcx9SJqs92tozQv9yrTC5DHCVyfeaisR3TimWzrLhLxBNCMq6qNHTnKRHY_-_-sBPhaDqckHPXxGbvxZXgT66Is-LORmnIRKxIA_x5GHc79IzaY__pZYh_ZxygNb-nrBvqItrssdrEAF_RzDw-ptaAJT6Vhcb3wQDkAFkdtCt", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1TINfC3dfx_D35a-aoc1SRX_cichiAVkgVAsTJhNdhwbOeC83HbTkcTksBvKyUT8D-lNqS8-XuMDJKNOqmJT0J12x4qoNO90oSWtBlHjjN6f84F1KOzwPh6WFq1agwSlRwOSESBSEPQk8WzFWDof49krl3RQA0opRaH_3OQ96Vnd3m8HG4Vx7awaquq_MqMo9eFUR9aGPTDBGqpotKDTnxnHRiHAMIEF5HbKBkGWJT7awmb73iKb4a-M3pLqewJGqI25gdYVRoVfe" },
    { title: "Lámpara Vintage", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1VGLnotEvh4uk6HDAzaOJ9ias7fQRcZeJ_AW_H-BcBt7JnDFQZ72TtrJes0ZwRvY-FkRM1PjAefCN5Y9fTriuLy3mhrHMFfytD3bwlS-LfCZG1D0FRPHVbbU3e33VZx_L_bO7zyhCXmU5VeOPHrKrnFhaMHK3pnSIGnVpBqI5qJh7EI-D44UUAd1hxK0CraTOXuXLNm0cqIDG2PR_YDam_GQHaw_m9qzqgRkRVlfiyKmiDLIs7xJUxUGQdFBgscJoz6qEMgHLDvgM", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnwyrUx4xbq-yDxHX4N9WJUR_IOO5cpquiCullLiBbIShg84QrtrIWgFwQq8wUTmcxiZmsiccJ2dAISuUIXFpJe_tH5_nh3DHSB3fQX3lhOmVLTTauGe7cgY7aQyppwX3cGvT3Y9oeFwr7FiimrNRPpCVXVnY_zJ438RWLkWse1zYAboCVIEjpffdrMmPO2gkeXIa8h-FScgKUMCjFq043oiiuOIeVRBLs1zTPgboqe98cPdNDyqf3RxXd423rBHB-JDCeIhO01ARQ" },
  ];

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
          Explorar Mercado
        </h2>
        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark">
              search
            </span>
            <input
              className="h-10 w-full rounded-lg border border-gray-200 bg-card-light pl-10 pr-4 text-sm text-text-light placeholder:text-text-muted-light focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-card-dark dark:text-text-dark dark:placeholder:text-text-muted-dark"
              placeholder="Buscar artículos..."
              type="search"
            />
          </div>
          <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-card-light px-4 text-sm font-medium text-text-light dark:border-gray-700 dark:bg-card-dark dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800">
            Categoría<span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg border border-gray-200 bg-card-light px-4 text-sm font-medium text-text-light dark:border-gray-700 dark:bg-card-dark dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800">
            Distancia<span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <div
              className="aspect-[4/3] w-full rounded-lg bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url('${item.img}')` }}
              onClick={() => setPage(Page.MakeOffer)}
            ></div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-base font-bold leading-normal text-text-light dark:text-text-dark">
                {item.title}
              </p>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 shrink-0"
                style={{ backgroundImage: `url('${item.avatar}')` }}
              ></div>
            </div>
            <button
              onClick={() => setPage(Page.MakeOffer)}
              className="mt-2 flex h-10 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-peach text-sm font-bold leading-normal tracking-[0.015em] text-primary dark:bg-primary/20 dark:text-primary hover:bg-opacity-80 transition-colors"
            >
              <span className="truncate">Hacer Oferta</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProfilePage: React.FC<NavigationProps> = () => {
  return (
    <div className="p-8">
      <div className="rounded-xl bg-card-light dark:bg-card-dark p-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 shrink-0"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC')" }}
          ></div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Sofia R.</h2>
            <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark flex items-center gap-1">
              <span className="material-symbols-outlined text-base">location_on</span>
              Buenos Aires, Argentina
            </p>
            <div className="mt-2 flex items-center gap-2">
              <p className="text-sm font-medium text-text-light dark:text-text-dark">Confianza:</p>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-lg text-yellow-500 filled">star</span>
                <span className="material-symbols-outlined text-lg text-yellow-500 filled">star</span>
                <span className="material-symbols-outlined text-lg text-yellow-500 filled">star</span>
                <span className="material-symbols-outlined text-lg text-yellow-500 filled">star</span>
                <span className="material-symbols-outlined text-lg text-yellow-500">star_half</span>
              </div>
              <span className="text-sm text-text-muted-light dark:text-text-muted-dark">(4.5)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav aria-label="Tabs" className="-mb-px flex gap-6">
            <a
              className="shrink-0 border-b-2 border-primary px-1 pb-3 text-sm font-bold text-primary dark:text-primary"
              href="#"
            >
              Mis Publicaciones
            </a>
            <a
              className="shrink-0 border-b-2 border-transparent px-1 pb-3 text-sm font-medium text-text-muted-light hover:border-gray-300 hover:text-text-light dark:text-text-muted-dark dark:hover:border-gray-500 dark:hover:text-text-dark"
              href="#"
            >
              Reseñas
            </a>
          </nav>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { title: "Cámara de Film", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC", time: "2 días" },
          { title: "Set de Cerámica", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCynXSSSG9u1UpBulAk0IEQ8oOsdisUoChg33Tpt_7fefcbs50MEC_FuwlJ6XnFpRZlbYj8DxBAXwdaRwzq5ElipdaN2w9PCKbzPt7bZ5luoE4TES1t9IA2dStVLwyixeKA3KzHPgsjtqlDQpB07AxZpu3l3Gs778cYuWWtUKZpsQfSKeeo1eiVeo31WYuNm_JgdgmRjkwb-eLJI3uOKeOFFp_E0wRDloAFTWkyu5dksQvmf89qa4ul8CUhHoXCJxpW5BqMfRX5yIcM", time: "1 semana" },
          { title: "Lámpara de Escritorio", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCynXSSSG9u1UpBulAk0IEQ8oOsdisUoChg33Tpt_7fefcbs50MEC_FuwlJ6XnFpRZlbYj8DxBAXwdaRwzq5ElipdaN2w9PCKbzPt7bZ5luoE4TES1t9IA2dStVLwyixeKA3KzHPgsjtqlDQpB07AxZpu3l3Gs778cYuWWtUKZpsQfSKeeo1eiVeo31WYuNm_JgdgmRjkwb-eLJI3uOKeOFFp_E0wRDloAFTWkyu5dksQvmf89qa4ul8CUhHoXCJxpW5BqMfRX5yIcM", time: "3 semanas" },
          { title: "Libros de Diseño", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCynXSSSG9u1UpBulAk0IEQ8oOsdisUoChg33Tpt_7fefcbs50MEC_FuwlJ6XnFpRZlbYj8DxBAXwdaRwzq5ElipdaN2w9PCKbzPt7bZ5luoE4TES1t9IA2dStVLwyixeKA3KzHPgsjtqlDQpB07AxZpu3l3Gs778cYuWWtUKZpsQfSKeeo1eiVeo31WYuNm_JgdgmRjkwb-eLJI3uOKeOFFp_E0wRDloAFTWkyu5dksQvmf89qa4ul8CUhHoXCJxpW5BqMfRX5yIcM", time: "1 mes" }
        ].map((item, idx) => (
          <div key={idx} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              <div className="h-full w-full bg-cover bg-center transition-transform group-hover:scale-105" style={{ backgroundImage: `url('${item.img}')` }}></div>
            </div>
            <div className="mt-3 flex justify-between">
              <div>
                <h3 className="text-sm font-semibold text-text-light dark:text-text-dark">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {item.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-text-muted-light dark:text-text-muted-dark">Publicado hace {item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MyItemsPage: React.FC<NavigationProps> = () => {
  const myItems = [
    { title: "Sillón de Madera", status: "Disponible", statusColor: "bg-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDtdI_sz8DiF9NDjz9oRUjM9gkOtw36hBFxwOMUqWSEzYkx6Q_0iz5JKkU0Bz-EmzVTzyl7mhiI3cgToa7kqmxAD_FTMdAKSPX6ed6247IfCh7_BB5CpubYiRxpVwK479uC-kJ5UW5S5wCEQM8IGH-gwJ5io10ju3C7bDeB4G6w1E7bu3ueDSoFuu_aOc20YnZPnAZjTwpwhlHfC2IpLgs1JyxZMrJfJG6xT6bOxM2XDlBxGkhe2AWhZmXKgyImdDZqpX0TuVkclb6" },
    { title: "Cámara de Film Vintage", status: "Cambiado", statusColor: "bg-brown", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7yh8TzUnktdviI3ywCkrAYfYDxQdr78zYs3PqmksP_0wFyXfRpzj69E26-EPkRi7Ku75U9Qc8fIsNtGZNM5WLjQIKv9nVLGV0Crgyk3DbxbAOYiXfMyYvg1Ek11VYZ1DzrQ_domkKhEwoxl3WzELqa-ZGtmiw3peWtD-fqDmE_KfPiWVBCot_8ki8wAjvtgTB6QV1jbizgpnaXPUV1wY2s0pOeCO0RxcEQ52fwf2k0pH7LRJDln3uVj_evYTunSo-xpAJU2uxuIJC" },
    { title: "Colección de Vinilos", status: "Disponible", statusColor: "bg-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NuesndynYPqypyPSQHTCIH9CgJ82aT2aX4uJKpxYIT4ianT4_MUxvm_NdOIFrOzt8B_6AIXET0mFoBDZhwoO6Q-njjhoQYzGEjGyiEPcn1LoixkYt6lQcUUkUYdLfsXpy7mrqIF8xx5YIUJOhjlTmv-0RW3CUDkXPnxjp9oCixxNrlJetXr_KOAOQi7S3kysBM9kzuBILemViFrf_AleWNULrf5pV5UTtB3OcpsyleRmUrN6X0_PQ0JXccZDVP7u3Ftf0QmLB0JN" },
    { title: "Planta Monstera", status: "Disponible", statusColor: "bg-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAwwg_MVDdg_Ae4doh4nn53KSRbpf2lBtKARU3m2nFJhLx0VlrwAdRRg-LqCAhQZo6m8v8Y04-t-0N3CJQ5RJp4zGxJZzH96vLPXB48Q_nlT_rPai4mjq0ih6h03EuZOu3puc96IOlrDT9bOsfg-ecZ3eTvnnRS_CdUJ2t8VQzIPKrdNqH5EE6ObubaFSCpn8BcIpoorZGr8kFptaUA-LKhJodd78Jbo1YNE9PPlysSd1XffVN6GiXJDuvpmGMLztoLLl7FBixagAp" },
    { title: "Libros Clásicos", status: "Cambiado", statusColor: "bg-brown", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChuHx4wdXTG_2xsOTUYlVb9CFVp6aGqtdFJfDp02Av4wezxI4bNGXh6B4P8SSgjUELzkioEQBOR4YI4FpSBsF0Lp8eT6mKY5yczW7BtI_OMETDxHyEx6pHSYiuOTjhxAz6PWUS8G0ZW0Ot1Gu3ZlpbzdJtDeg6yyF81N7jvfFUH4DPIzRsIMmyxzCGhPs4ZLarrOYOybcrQtMhDhoQiJZGM5okDNUFUMLuDuUCs7wllPuiVVXMuYqDs0VLPmMDGO4zlDlff8GMS1wR" },
    { title: "Set de Herramientas", status: "Disponible", statusColor: "bg-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp5LjDm_bpBRauyc3C1fFXnaRqPL0_MXlohjYMTHJmz2l4bUnYQwjj7uMrFzUvWmbyFa2Iyqc6UCu_3bStAYB6gPKowTL0PvX2G-ncxz57ICVTbAGZB0q1wtvXUEK2Na3twPvZ0p7dOkBf4sNbhj128cSIPzGu-0vvx5RJH6nf86MBPVEzY4ttztphlR1nDekCP7hOMWzkI81aWS_2ZoAen8a1XN9UjAZXebciZG21UYtS44nMridacTh4OEwnADnkog_TRAaUX--M" },
    { title: "Juego de Tazas", status: "Disponible", statusColor: "bg-primary", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD27vGwdNYIpC3xfXbMT2uV87xvLQo8oih0Ktd5b9qwKLQdYigF9IWh2avrZKmyHCjf_SxXYJC9No81RH84KhYHWJZG6TNcYkckc7xMcx9SJqs92tozQv9yrTC5DHCVyfeaisR3TimWzrLhLxBNCMq6qNHTnKRHY_-_-sBPhaDqckHPXxGbvxZXgT66Is-LORmnIRKxIA_x5GHc79IzaY__pZYh_ZxygNb-nrBvqItrssdrEAF_RzDw-ptaAJT6Vhcb3wQDkAFkdtCt" },
    { title: "Lámpara Vintage", status: "Cambiado", statusColor: "bg-brown", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1VGLnotEvh4uk6HDAzaOJ9ias7fQRcZeJ_AW_H-BcBt7JnDFQZ72TtrJes0ZwRvY-FkRM1PjAefCN5Y9fTriuLy3mhrHMFfytD3bwlS-LfCZG1D0FRPHVbbU3e33VZx_L_bO7zyhCXmU5VeOPHrKrnFhaMHK3pnSIGnVpBqI5qJh7EI-D44UUAd1hxK0CraTOXuXLNm0cqIDG2PR_YDam_GQHaw_m9qzqgRkRVlfiyKmiDLIs7xJUxUGQdFBgscJoz6qEMgHLDvgM" },
  ];

  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
        <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
          Mis Artículos
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myItems.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <div
                className="aspect-square w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${item.img}')` }}
              ></div>
              <span className={`absolute top-2 left-2 rounded-full px-3 py-1 text-xs font-bold text-white ${item.statusColor}`}>
                {item.status}
              </span>
            </div>
            <p className="text-base font-bold leading-normal text-text-light dark:text-text-dark">
              {item.title}
            </p>
            <div className="mt-auto flex items-center justify-between gap-2">
              <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-peach px-4 text-sm font-bold leading-normal tracking-[0.015em] text-primary dark:bg-primary/20 dark:text-primary hover:bg-opacity-80 transition-colors">
                <span className="truncate">Promocionar</span>
              </button>
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-gray-200 text-text-muted-light dark:border-gray-700 dark:text-text-muted-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
