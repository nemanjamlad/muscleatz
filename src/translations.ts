
export type Locale = 'sr' | 'en';

export const translations = {
  sr: {
    common: {
      orderNow: 'Poručite obroke',
      language: 'EN',
      home: 'Početna',
      menus: 'Meniji',
      contact: 'Kontakt',
    },
    home: {
      title: 'MuscleEatz',
      subtitle: 'Zdrava hrana za zdrav život',
      heroText: '7 dana nedeljno donosimo obroke na vašu adresu',
      orderCta: 'Poručite odmah',
      aboutUs: 'O nama',
      aboutText: 'MuscleEatz je premium servis za dostavu zdrave, sveže pripremljene hrane koja je kreirana da ispuni sve vaše nutritivne potrebe.',
      features: {
        title: 'Zašto MuscleEatz?',
        freshFood: {
          title: 'Sveže pripremljeni obroci',
          description: 'Naši obroci su pripremljeni od najkvalitetnijih sastojaka i dostavljeni sveži.'
        },
        delivery: {
          title: 'Dostava na adresu',
          description: '7 dana nedeljno dostavljamo hranu na vašu adresu.'
        },
        nutrition: {
          title: 'Nutritivno izbalansirano',
          description: 'Svaki obrok je kreiran da zadovolji vaše nutritivne potrebe.'
        }
      },
      orderInfo: 'Primamo porudžbine od ponedeljka do subote za sledeću nedelju.',
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
    },
    contact: {
      title: 'Kontakt informacije',
      selectedMenu: 'Izabrani meni',
      name: 'Ime i prezime',
      email: 'Email adresa',
      phone: 'Broj telefona',
      address: 'Adresa za dostavu',
      submit: 'Potvrdite porudžbinu',
      submitting: 'Slanje...',
      success: 'Uspešno',
      orderConfirmed: 'Vaša porudžbina je primljena. Uskoro ćemo vas kontaktirati.'
    },
    footer: {
      rights: 'Sva prava zadržana',
      contact: 'Kontakt',
      address: 'Adresa: Bulevar oslobođenja 123, Beograd',
      phone: 'Telefon: 0603187333',
      email: 'Email: muscleatz@gmail.com'
    }
  },
  en: {
    common: {
      orderNow: 'Order Meals',
      language: 'SR',
      home: 'Home',
      menus: 'Menus',
      contact: 'Contact',
    },
    home: {
      title: 'MuscleEatz',
      subtitle: 'Healthy Food for Healthy Life',
      heroText: 'We deliver meals to your address 7 days a week',
      orderCta: 'Order Now',
      aboutUs: 'About Us',
      aboutText: 'MuscleEatz is a premium meal delivery service with fresh, healthy food created to fulfill all your nutritional needs.',
      features: {
        title: 'Why MuscleEatz?',
        freshFood: {
          title: 'Freshly Prepared Meals',
          description: 'Our meals are prepared from the highest quality ingredients and delivered fresh.'
        },
        delivery: {
          title: 'Home Delivery',
          description: 'We deliver food to your address 7 days a week.'
        },
        nutrition: {
          title: 'Nutritionally Balanced',
          description: 'Each meal is designed to meet your nutritional needs.'
        }
      },
      orderInfo: 'We accept orders from Monday to Saturday for the following week.',
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
    },
    contact: {
      title: 'Contact Information',
      selectedMenu: 'Selected Menu',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Delivery Address',
      submit: 'Confirm Order',
      submitting: 'Sending...',
      success: 'Success',
      orderConfirmed: 'Your order has been received. We will contact you shortly.'
    },
    footer: {
      rights: 'All Rights Reserved',
      contact: 'Contact',
      address: 'Address: 123 Liberation Boulevard, Belgrade',
      phone: 'Phone: 0603187333',
      email: 'Email: muscleatz@gmail.com'
    }
  }
};
