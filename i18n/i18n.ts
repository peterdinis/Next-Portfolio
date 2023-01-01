import i18n from "i18next";
import {
  initReactI18next
} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "sk",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            ecommerceSimple: "Online shop for selling foods",
            foo: "Online food shop",
            oldProject: "My old portfolio",
            eshopAPI: "API for online shop",
            socialGraphql: "Simple Social site instagram clone",
            aboutMe: "A few sentences about me",
            firstSentence: "Hi My name is Peter Dinis. I am 21 years old. I come from Bardejov. I visited Secondary industrial school(SPST) in Bardejov. My favorite sports are Football and Voleyball",
            secondSentence: "I have the most experience with technologies: React Nestjs and Typescript Node.",
            favoriteStack: "My favorite stack",
            myProjects: "Some of my projects",
            projectOne: "Spst Library",
            projectOneD: "Copy of the school project web library",
            projectTwo: "Backend API for SPST Library",
            projectTwoD: "Backend Api copy of school project",
            projectThreeD: "DevBookAPI",
            nodeT: "Simple template for working with nodejs and typescript",
            projectSixD: "Photo upload app user can upload photos plus authentication",
            projectSevenD: "Crud photos plus full authentication",
            work: "My work experience",
            reddit: "Reddit app copy",
            libraryApp: "A simple library application",
            snakeGame: "Snake web game",
            snakeDesc: "Online web game snake",
            workOne: "(1-year) School library project Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-weeks) Erasmus Company Think Easy React.js",
            workFour: "(11-Months) Navisys s.r.o",
            workThree: "(3-Months) Company Think Easy React.js Typescript",
            knowledge: "My knowledge",
            instaBE: "Api for instagram application",
            emailInfo: "If you are interested in my work, write to me at",
            uuappHeader: "What is uuapp",
            newProject: "Simple social site",
            insta: "Instagram clone",
            newProjectTwo: "Client for foodStore e-commerce app",
            newProjectThree: "API for foodStore e-commerce app",
            foodAPI: "API for online food ordering",
            foodClient: "Application for ordering food",
            foodApp: "Application for ordering food online",
            foodAppAPI: "Api to online food ordering apps",
            sevenDesc: "A simple control panel administrator can add customer books and issues and see questions from page users",
            uuappText: "This project was done during high school. The unicorn company announced a competition and the school I visited to apply. With the help of their framework we had to create a page. Their framework is based on the principle of React Node Mongodb (Modified version)",
          },
        },
      },

      sk: {
        translation: {
          description: {
            ecommerceSimple: "Online shop na objednávanie jedla",
            snakeDesc: "Online webová hra had",
            libraryApp: "Jednoduchá knižničná aplikácia",
            snakeGame: "Webová hra had",
            nodeT: "Jednoduchá template pre prácu z nodejs a typescript",
            foodApp: "Applikácia na objednávanie jedál online",
            foodAppAPI: "Api ku applikácií na objednávanie jedál online",
            disneyClone: "Klon stránky Disney+",
            foo: "Online shop na nákup jedla",
            socialGraphAPI: "API k sociálnej siete",
            socialGraphql: "Jednoduchá socialná sieť podobná instagramu",
            reddit: "Kópia applikácie reddit",
            insta: "Kópia applikácie instagram",
            instaBE: "API pre applikáciu instagram",
            oldProject: "Moje staré portfolio",
            aboutMe: "Pár viet o mne",
            workFour: "(11-Mesiacov) Navisys s.r.o",
            firstSentence: "Ahoj Volám sa Peter Dinis. Mám 21 rokov. Pochádzam z Bardejova. Naštevoval som Strednú priemyselnú školu technickú(SPŠT) v Bardejove. Medzi moje záujmy patrí futbal, volejbal.",
            secondSentence: "Najväčšie skúsenosti mám z technológiami: React Nestjs a Typescript Node.",
            favoriteStack: "Môj obľubený stack",
            newProjectOne: "Jednoduchá e-commerce aplikácia v node",
            myProjects: "Niektoré moje projekty",
            newProjectTwo: "Frontend k e-commerce-app",
            newProjectThree: "Api k e-commerce-app",
            projectOne: "Spšt Knižnica",
            projectOneD: "Kkopia školského projektu online webová knižnica",
            projectTwo: "Backend API ku školskej knižnici",
            projectTwoD: "Backend Api kopia školského projektu",
            projectFourD: "Webová hra hadík",
            work: "Moje pracovné skúsenosti",
            workOne: "(1-rok) Školská knižnica projekt Unicorn React-Node-MongoDB - (uuapp)",
            workTwo: "(3-týždne) Erazmus Firma Think Easy React.js",
            workThree: "(3-Mesiace) Firma Think Easy React.js Typescript",
            knowledge: "Moje znalosti",
            emailInfo: "Ak ťa moja tvorba zaujala tak mi napíš na",
            uuappHeader: "Čo je uuapp",
            uuappText: "Tento projekt bol robený počas strednej školy. Firma unicorn vyhlásila súťaž a školu ktorú som navštívil sa prihlásiť. Za pomoci ich frameworku sme mali vytvoriť stránku.Ich framework je postavený na princípe React Node Mongodb (Upravená verzia)",
            sevenDesc: "Jednoduchý dashboard admin vie pridať knihy zákazníkov a problémy a vidí otázky používateľov stránky",
          },
        },
      }, 
    },
  });

export default i18n;