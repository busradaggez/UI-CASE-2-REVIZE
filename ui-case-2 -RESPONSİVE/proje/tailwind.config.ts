
import { MdBorderColor } from "react-icons/md";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    /* Container*/
    container: {
      center: true,
      padding: {
        'top1': '2rem',
        DEFAULT: '4rem',
        sm: '4,25em',
        md: '5,1rem',
        lg: '6.8rem',
        xl: '8.5rem',
      },
    },
    extend: {
      /*Display*/
      display: {
        'flex': 'flex',
        'row': 'row',
      },
      /* Items */
      alignItems: {
        'center': 'center',
      },
      /* Konum */
      justifyContent: {
        'end': 'flex-end',
        'start': 'start',
        'center': 'center',
        'between': 'space-between',
      },
      flexWrap: {
        'nowrap': 'nowrap',
        'wrap': 'wrap',
      },
      /* Boşluklar */
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '12': '3rem',
        '4': '1rem',
        '120': '7.5rem'
      },
      /* Renkler */
      colors: {
        color1: "#5956E9",
        color2: "#7572FF",
        color3: "#6C6C72",
        color4: "#232233",
        color5: "#232233",
        color6: "#FFFFFF",
      },
      /* Font Tipi */
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif'],
      },
      /* Yazı Tipi */
      textDecoration: {
        'underline': "underline",
      },
      /* Margin Bilgileri */
      margin: {
        '52': '52px',
        '38': '38px',
        '40': '40px',
        '116': '116px',
        '43': '43px',
        '20': '20px',
        '6': '6px',
        '32': '32px',
        '12': '12px',
        '80': '80px',
        '47': '47px',
        '24': '24px',
      },
      /* Border */
      borderRadius: {
        '5': '5px',
      },
      /* Boşluk */
      gap: {
        '15': '15px',
        '18': '18px',
        '30': '30px',
        '4': '4px',
      },
      /* Yazı Boyutu */
      fontSize: {
        '4xl': '3.125rem',
        'checkBox': '1.5rem',
        'footer': '25px',
        'h2': "48.83px",
        'h4': "31.25px",
        'h5': "25px",
        'h6': "20px",
        'h7': "16px",
      },
      /* Yazı Kalınlığı */
      fontWeight: {
        'h2': "700",
        'h5': "600",
        'h7': "400",
      },
      /* Yazı Boyutu */
      lineHeight: {
        'h2': "63.48px",
        'h4': "47.25px",
        'h5': "37.5px",
        'h6': "30px",
        'h7': "24px",
        'relaxed': '1.625',
      },
      /* Arka Plan Resmi */
      backgroundImage: {
        background1: "url('/background1.png')",
        background2: "url('/background2.png')",
      },
      /* Resim Boyutu */
      backgroundSize: {
        'custom-cover': 'cover',
      },
      /* Arka Plan Boyutu Tekrarı */
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      /* Boyut-Genişlik */
      width: {
        '200px': '200px',
        '300px': '300px',
        '375px': '375px',
      },
      /* Max-Genişlik */
      maxWidth: {
        'xs': '20rem',
        'xl': '36rem',
        '2xl': '42rem',
        container: "1440px",
        social: "162px",
        header: "1164px",
        hamburger: "60px",
        home: "36px",
        about: "71px",
        features: "103px",
      },
      /* Max-Yükseklik */
      maxHeight: {
        menu: "114px",
        header: "60px",
        hamburger: "120px",
        home: "36px",
        about: "30px",
        features: "30px",
      },
      /* Yazı Boyutu */
      flexDirection: {
        text: "column",
      },
      /* Ekranlar */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  /* Özel Frameler */
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".hamburger-menu-custom": {
          weight: "60px",
          height: "120px",
          alignItems: "center",
          gap: "4px",
        },
        ".logo-custom": {
          maxWidth: "200px",
          maxHeight: "90px",
          marginLeft: "116px",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".cell-phone-container": {
          position: "relative",
          top: "96px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          marginLeft: "20px",
          "@screen lg": {
            width: "50%",
            marginLeft: "80px",
            justifyContent: "center",
          },
        },
        ".rectangle4-container": {
          maxWidth: "570px",
          padding: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          "@screen lg": {
            width: "570px",
            height: "432px",
          },
        },
        ".download-app-container": {
          maxWidth: "289px",
          maxHeight: "38px",
          fontSize: "25px",
          marginBottom: "12px",
          fontWeight: "600",
        },
        ".app-store-container": {
          maxWidth: "314px",
          maxHeight: "47px",
          display: "flex",
        },
        ".about-app-container": {
          maxWidth: "1144px",
          minHeight: "100vh",
          display: "releative",
          justifyContent: "flex-center",
          alignItems: "center",
          paddingTop: "60px",
          margin: "0 auto",
          overflow: "hidden",
        },
        ".cell-phone2-container": {
          maxWidth: "386px",
          maxHeight: "526px",
          display: "releative",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "130px",
          margin: "0 auto"
        },
      });
    }),
  ],
} satisfies Config;
