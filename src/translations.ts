export type Locale = 'sr' | 'en';

export const translations = {
  sr: {
    common: {
      orderNow: 'Poručite obroke',
      language: 'EN',
      home: 'Početna',
      about: 'O nama',
      features: 'Zašto MusclEatz?',
      menus: 'Meniji',
      jelovnik: 'Jelovnik',
      contact: 'Kontakt',
    },
    home: {
      title: 'MusclEatz',
      subtitle: 'Zdrava hrana za zdrav život',
      heroText: '7 dana nedeljno donosimo obroke na vašu adresu',
      orderCta: 'Poručite odmah',
      aboutUs: 'O nama',
      aboutText: 'MusclEatz je premium servis za dostavu zdrave, sveže pripremljene hrane koja je kreirana da ispuni sve vaše nutritivne potrebe. Idealno rešenje za sportiste koji žele da ostvare maksimalne rezultate.',
      features: {
        title: 'Zašto MusclEatz?',
        freshFood: {
          title: 'Sveže pripremljeni obroci',
          description: 'Naši obroci su pripremljeni od najkvalitetnijih sastojaka i dostavljeni sveži.'
        },
        delivery: {
          title: 'Dostava na adresu',
          description: '7 dana nedeljno dostavljamo hranu na vašu adresu od 7 do 10 ujutru.'
        },
        nutrition: {
          title: 'Nutritivno izbalansirano',
          description: 'Svaki obrok je kreiran da zadovolji vaše nutritivne potrebe.'
        },
        chefs: {
          title: 'Vrhunski kuvari',
          description: 'Našu hranu pripremaju vrhunski kuvari sa dugogodišnjim iskustvom.'
        },
        experts: {
          title: 'Stručni tim',
          description: 'Menije osmišljavaju stručni nutricionisti u saradnji sa iskusnim trenerima.'
        }
      },
      orderInfo: 'Primamo porudžbine od ponedeljka do subote za sledeću nedelju.',
      orderInstructions: 'Uputstva za poručivanje:',
      orderSteps: [
        'Primamo porudžbine od ponedeljka do subote za sledeću nedelju.',
        'Nakon popunjenog upitnika naš tim će vas kontaktirati u najkraćem mogućem roku.',
        'Vaše obroke možete očekivati na adresi svakog dana od 7 do 10 ujutru.'
      ]
    },
    order: {
      title: 'Izaberite svoj meni',
      subtitle: 'Prilagođeno vašim potrebama',
      mensLarge: {
        title: 'Veliki meni za muškarce',
        calories: '2500 kcal',
        price: '13000 RSD',
        description: 'Idealan za muškarce koji treniraju i žele da izgrade mišićnu masu.'
      },
      mensSmall: {
        title: 'Mali meni za muškarce',
        calories: '2000 kcal',
        price: '11500 RSD',
        description: 'Savršen za muškarce koji žele da održe težinu i energiju.'
      },
      womensLarge: {
        title: 'Veliki meni za žene',
        calories: '1800 kcal',
        price: '10500 RSD',
        description: 'Kreiran za žene koje treniraju i žele da održe toniranu figuru.'
      },
      womensSmall: {
        title: 'Mali meni za žene',
        calories: '1300 kcal',
        price: '9500 RSD',
        description: 'Idealan za žene koje žele da smanje telesnu težinu.'
      },
      selectMenu: 'Izaberite meni',
      orderNote: 'Primamo porudžbine od ponedeljka do subote za sledeću nedelju.',
      deliveryTime: 'Hrana stiže na vašu adresu od 7 do 10 ujutru.'
    },
    jelovnik: {
      title: 'Jelovnik',
      subtitle: 'Pogledajte naš aktuelni jelovnik',
      uploadButton: 'Otpremite jelovnik',
      clickToEnlarge: 'Kliknite na sliku da je uvećate',
      noMenu: 'Trenutno nema dostupnog jelovnika',
    },
    contact: {
      title: 'Kontakt informacije',
      selectedMenu: 'Izabrani meni',
      name: 'Ime i prezime',
      email: 'Email adresa',
      phone: 'Broj telefona',
      address: 'Adresa za dostavu',
      deliveryTime: 'Hrana stiže na vašu adresu od 7 do 10 ujutru.',
      submit: 'Potvrdite porudžbinu',
      submitting: 'Slanje...',
      success: 'Uspešno',
      orderConfirmed: 'Vaša porudžbina je primljena. Uskoro ćemo vas kontaktirati.'
    },
    footer: {
      rights: 'Sva prava zadržana',
      contact: 'Kontakt',
      address: 'Adresa: Beograd',
      phone: 'Telefon: 0603187333',
      email: 'Email: muscleatz@gmail.com'
    }
  },
  en: {
    common: {
      orderNow: 'Order Meals',
      language: 'SR',
      home: 'Home',
      about: 'About Us',
      features: 'Why MusclEatz?',
      menus: 'Menus',
      jelovnik: 'Menu Card',
      contact: 'Contact',
    },
    home: {
      title: 'MusclEatz',
      subtitle: 'Healthy Food for Healthy Life',
      heroText: 'We deliver meals to your address 7 days a week',
      orderCta: 'Order Now',
      aboutUs: 'About Us',
      aboutText: 'MusclEatz is a premium meal delivery service with fresh, healthy food created to fulfill all your nutritional needs. Perfect solution for athletes who want to achieve maximum results.',
      features: {
        title: 'Why MusclEatz?',
        freshFood: {
          title: 'Freshly Prepared Meals',
          description: 'Our meals are prepared from the highest quality ingredients and delivered fresh.'
        },
        delivery: {
          title: 'Home Delivery',
          description: 'We deliver food to your address 7 days a week between 7 and 10 AM.'
        },
        nutrition: {
          title: 'Nutritionally Balanced',
          description: 'Each meal is designed to meet your nutritional needs.'
        },
        chefs: {
          title: 'Top Chefs',
          description: 'Our food is prepared by top chefs with years of experience.'
        },
        experts: {
          title: 'Expert Team',
          description: 'Menus are created by professional nutritionists in collaboration with experienced trainers.'
        }
      },
      orderInfo: 'We accept orders from Monday to Saturday for the following week.',
      orderInstructions: 'Order Instructions:',
      orderSteps: [
        'We accept orders from Monday to Saturday for the following week.',
        'After submitting the form, our team will contact you as soon as possible.',
        'You can expect your meals at your address every day between 7 and 10 AM.'
      ]
    },
    order: {
      title: 'Choose Your Menu',
      subtitle: 'Customized to your needs',
      mensLarge: {
        title: 'Large Menu for Men',
        calories: '2500 kcal',
        price: '13000 RSD',
        description: 'Ideal for men who train and want to build muscle mass.'
      },
      mensSmall: {
        title: 'Small Menu for Men',
        calories: '2000 kcal',
        price: '11500 RSD',
        description: 'Perfect for men who want to maintain weight and energy.'
      },
      womensLarge: {
        title: 'Large Menu for Women',
        calories: '1800 kcal',
        price: '10500 RSD',
        description: 'Created for women who train and want to maintain a toned figure.'
      },
      womensSmall: {
        title: 'Small Menu for Women',
        calories: '1300 kcal',
        price: '9500 RSD',
        description: 'Ideal for women who want to reduce body weight.'
      },
      selectMenu: 'Select Menu',
      orderNote: 'We accept orders from Monday to Saturday for the following week.',
      deliveryTime: 'Food is delivered to your address between 7 and 10 AM.'
    },
    jelovnik: {
      title: 'Menu Card',
      subtitle: 'Check our current menu',
      uploadButton: 'Upload Menu',
      clickToEnlarge: 'Click on the image to enlarge',
      noMenu: 'No menu currently available',
    },
    contact: {
      title: 'Contact Information',
      selectedMenu: 'Selected Menu',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Delivery Address',
      deliveryTime: 'Food is delivered to your address between 7 and 10 AM.',
      submit: 'Confirm Order',
      submitting: 'Sending...',
      success: 'Success',
      orderConfirmed: 'Your order has been received. We will contact you shortly.'
    },
    footer: {
      rights: 'All Rights Reserved',
      contact: 'Contact',
      address: 'Address: Belgrade',
      phone: 'Phone: 0603187333',
      email: 'Email: muscleatz@gmail.com'
    }
  }
};
