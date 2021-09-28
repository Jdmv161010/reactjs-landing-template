import * as actionTypes from "../types/types";

const initialState = [
  {
    Navbar: {
      item1: "Acerca de nosotros",
      item2: "Servicios y productos",
      item3: "Contáctenos",
    },
    About: {
      titulo: "Acerca de nosotros",
      item1: "Intelecto Soluciones y Tecnología S.A.S. fue creada en abril de 2002, en la ciudad de Cali. Rápidamente obtuvo participación en proyectos tecnológicos de grandes empresas en la región de distintos sectores, ayudándolas a mejorar sus procesos empresariales. De igual manera se destacó y logró entrar a competir en proyectos a nivel nacional.",
      item2: "El auge de la transformación tecnológica le abre las puertas en importantes empresas, consiguiendo así altos estándares y reconocimientos a nivel latinoamericano. Intelecto es Socio Gold de Microsoft, destacándose a lo largo de su trayectoria en servicios especializados de consultoría en Microsoft Dynamics 365, integraciones con diferentes productos y tecnologías, soporte de infraestructura local y en Azure. La innovación es uno de los pilares que destaca a nuestro equipo de alto desempeño y reflejo de ello son los casos de éxito.",
      TituloPremio1: "Microsoft Gold Partner",
      DetallePremio1: "Somos Gold Partner de Microsoft desde hace màs de 10 años.",
      TituloPremio2: "Microsoft en Seguridad en Sector Pùblico y Seguridad Nacional.",
      DetallePremio2: "Socio del Año de Microsoft en Seguridad en Sector Pùblico y Seguridad Nacional en Latinoamèrica y Caribe en 2014 y 2016.",
      TituloPremio3: "Microsoft Consulting Services en Colombia.",
      DetallePremio3: "Socio de Servicios del Año en Microsoft en Colombia en 2014 y 2015.",
      TituloPremio4: "Microsoft Dynamics CRM en Colombia.",
      DetallePremio4: "Socio del Año de Microsoft Dynamics CRM en Colombia en 2009,2011,2012,2013 y 2015.",
      TituloPremio5: "Microsoft Dynamics CRM en Latinoamèrica y Caribe.",
      DetallePremio5: "Socio del Año de Microsoft Dynamics CRM en Latinoamèrica y Caribe en 2008 y 2009.",
    },
    Contact: {
      titulo: "Contáctenos",
      item1: "Brindar un gran servicio y producto es nuestro emblema. Si tienes, peticiones, quejas o sugerencias déjanos tus datos y cuéntanos un poco más. Con gusto trabajaremos en tus inquietudes o comentarios.",
      tituloForm: "Comunícate con nosotros",
      form1: "Nombre",
      form2: "Nùmero Telefònico",
      form3: "Correo",
      form4: "Asunto",
      form5: "Mensaje",
      Asunto1: "Petición o Cotización",
      Asunto2: "Queja",
      Asunto3: "Sugerencia",
      Asunto4: "Felicitación",
      Asunto5: "Envío Hoja de Vida",
      boton: "Enviar",
    },
    ProductsServices: {
      titulo: "Servicios y productos",
      Servicio1: "CRM",
      Detalle1: "Gestione la relación con sus clientes a través de Microsoft Dynamics 365. Obtenga todo lo que necesita en una sola herramienta. Controle los procesos de ventas, servicio al cliente, marketing, recursos humanos, entre otros. •	Ventas •	Servicio al cliente •	Marketing •	Recursos Humanos",
      Servicio2: "Desarrollo",
      Detalle1: "Aprovechamos nuestro conocimiento y experiencias para mejorar los procesos, crear nuevos recursos o sistemas que permitan un constante avance a su empresa.  La innovación es parte fundamental de nuestros pilares y buscamos entregar los mejores resultados con excelente calidad.",
      Servicio3: "Infraestructura",
      Detalle1: "Brindamos consultoría, implementación y soporte en infraestructura Microsoft tanto local, híbrida o en Azure. Descubre las bondades que tiene la nube de Microsoft y lo que te permite ahorrar en costos de equipos. Convierte a las plataformas en aliadas y saca el máximo provecho.",
      Productos: "Productos Propios",
      DetalleProductos: "Contamos con varias soluciones que le ayudaran a brindarle mayor productividad y cumplimiento a sus procesos. ¡Da click en alguno de nuestros productos para conocer más!",
    },
    PaginaHome: {
      Home: "Aplicaciones empresariales que transforman su negocio",
      detalleHome: "Simplificación y conexión de procesos empresariales y mejoramiento de las interacciones y relaciones con sus clientes",
      AboutUs : "Acerca de Nosotros",
      detalleAboutUs: "Empresa vallecaucana con más de 19 años de experiencia en apoyo tecnológico en el sector público y privado, especializados en el área de Proyectos de CRM, Desarrollo a la medida, Infraestructura y Azure. Atendiendo al cliente con altos estándares de calidad, servicio y sentido de pertenencia.",
      ServiceProduct: "Servicios y Productos",
      Servicio1: "Desarrollo",
      detalleS1: "Contar con un aliado y experto en desarrollo a la medida es vital para las organizaciones. Saca el máximo provecho de tus aplicaciones y herramientas empresariales. Incluso, crea las propias cuando ninguna cumpla con los requerimientos de tu empresa.",
      Servicio2: "CRM",
      detalleS2: "Obtenga una vista 360° de sus clientes. Gestione la información y procesos con sus clientes aprovechando integraciones con los aplicativos que ya maneja su empresa.",
      Servicio3: "INFRAESTRUCTURA",
      detalleS3: "Permite que tu empresa vaya a la vanguardia y haz de la transformación tecnológica una aliada. La infraestructura es la columna vertebral de las compañías, ya sea híbrida o en la nube.  Consulta la mejor opción para tu empresa.",
      Productos: "PRODUCTOS PROPIOS",
      detalleP: "Potencializa los procesos empresariales con Chatbots, autogestión de contraseñas y muchas otras herramientas que tenemos para tu compañía.",
      Clientes: "Clientes",
      ChooseUs: "¿Por qué escogernos?",
      testimonio: '"El indicador de satisfacción del cliente se ha incrementado, debido a que disponen de la herramienta todo el día. Adicional, es una herramienta muy sencilla de utilizar. La implementación fue rápida y sencilla."',
      estadistica1: "Clientes",
      estadistica2: "Usuarios",
      estadistica3: "Implementaciones",
      estadistica4: "Años de Experiencia",
    },
    Footer: {
      item2: "Enlaces de interes",
      item3: "Siguenos",
    },
  },
  {
    Navbar: {
      item1: "About us",
      item2: "Services and products",
      item3: "Contact us",
    },
    About: {
      titulo: "About Us",
      item1: "Intelecto Soluciones y Tecnología S.A.S. was created in April 2002, in the city of Cali – Colombia and quickly obtained participation in technology projects of large companies in the region from different sectors, helping them to improve their business processes.",
      item2: "The rise of digital transformation has speed up the growth of many tech companies that help their customers to improve their processes through the implementation of TI solutions. Intelecto is a Microsoft Gold Partner, that has stood out throughout its career in specialized consulting services in Microsoft Dynamics 365, integrations with different products and technologies, local infrastructure support and Microsoft Azure cloud services. 19 years of experience, more than 20 companies and thousands of happy users are the reflection of working with passion and having a high-performance team that works alongside our clients.",
      TituloPremio1: "Microsoft Gold Partner",
      DetallePremio1: "We have been a Microsoft Gold Partner for more than 10 years.",
      TituloPremio2: "Microsoft in Public Sector Security and National Security.",
      DetallePremio2: "Microsoft Partner of the Year in Public Sector Security and National Security in Latin America and the Caribbean in 2014 and 2016.",
      TituloPremio3: "Microsoft Consulting Services ein Colombia.",
      DetallePremio3: "Partner of the Year at Microsoft in Colombia in 2014 and 2015.",
      TituloPremio4: "Microsoft Dynamics CRM in Colombia.",
      DetallePremio4: "Microsoft Dynamics CRM Partner of the Year in Colombia in 2009,2011,2012,2013 and 2015.",
      TituloPremio5: "Microsoft Dynamics CRM in Latin america and the Caribbean.",
      DetallePremio5: "Microsoft Dynamics CRM Partner of the Year in Latin America and the Caribbean in 2008 and 2009.",
    },
    Contact: {
      titulo: "Contact Us",
      item1: "Providing a great service and product is our emblem. If you have any requests, complaints, or suggestions, leave us your information, and tell us a little more. We will gladly work on your concerns or comments.",
      tituloForm: "Let's Talk",
      form1: "Name",
      form2: "Telephone Numbre",
      form3: "Email",
      form4: "Subject",
      form5: "Message",
      Asunto1: "Get in touch",
      Asunto2: "Product Information",
      Asunto3: "Service and product pricing",
      Asunto4: "Congratulations",
      Asunto5: "Sending CV",
      boton: "Send",
    },
    ProductsServices: {
      titulo: "Products and Services",
      Servicio1: "CRM",
      Detalle1: "Manage the relationship with your customers through Microsoft Dynamics 365. Get everything you need in a single tool. Control sales processes, customer service, marketing, human resources, and others. •	Sales •	Customer service • Marketing •	Human Resources",
      Servicio2: "Development",
      Detalle1: "We use our experience and knowledge in different areas to improve processes, create new resources or systems that allow constant progress for your company. Innovation is a fundamental part of our DNA, and we seek to deliver the best results with excellent quality.",
      Servicio3: "Infrastructure",
      Detalle1: "We provide consulting, implementation, and support in Microsoft infrastructure both local, hybrid or in Azure. Discover the benefits of the Microsoft cloud that allows you to save on equipment costs. Turn platforms into allies and get the most out of it.",
      Productos: "Our Solutions",
      DetalleProductos: "We have multiple solutions that will help you provide greater productivity and agility to your processes. Know more below!",
    },
    PaginaHome: {
      Home: "Development of corporate software that transforms your business",
      detalleHome: "We simplify and connect your business processes and help you to improve the relationship and the way you interact with your customers",
      AboutUs : "About Us",
      detalleAboutUs: "Colombian company with more than 19 years of experience providing technological support in the public and private sector, specialized CRM Projects, Custom Development, Infrastructure and Azure. Serving the client with high standards of quality, service, and a sense of belonging.",
      ServiceProduct: "Products and Services",
      Servicio1: "DEVELOPMENT",
      detalleS1: "Having an expert partner in custom development is vital for organizations. Get the most out of your business applications and tools. Even create your own when none meets the requirements of your company.",
      Servicio2: "CRM",
      detalleS2: "Get a 360 ° view of your customers. Manage the information and processes with your clients taking advantage of integrations with the applications that your company already manages.",
      Servicio3: "INFRASTRUCTURE",
      detalleS3: "Allow your company to be at the forefront and get into the digital transformation today. Infrastructure is the backbone of companies, whether hybrid or cloud. Check the best option for your company.",
      Productos: "OUR SOLUTIONS",
      detalleP: "Boost business processes with Chatbots, self-management of passwords and many other tools that we have for your company.",
      Clientes: "Clients",
      ChooseUs: "Why choose us?",
      testimonio: '"The customer satisfaction indicator has increased because they have the tool available all day. Additionally, it is a very simple tool to use, and its implementation was quick and easy."',
      estadistica1: "Clients",
      estadistica2: "Users",
      estadistica3: "Implementations",
      estadistica4: "Experience years",
    },
    Footer: {
      item2: "Related Links",
      item3: "Follow Us",
    },
  },
];

let index = 0;

export const lenguageReducer = (state = initialState[index], action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LENGUAGE:
      index = index + 1;
      return {
        ...initialState[index % 2 == 0 ? 0 : 1],
      };
      break;

    default:
      return state;
      break;
  }
};
