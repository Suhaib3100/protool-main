import { Behance, Facebook, Github, LinkedIn } from './svgImages';

// Navbar Data
export const menuData = {
  logoLight: 'Protool', // Text logo for light mode
  logoDark: 'Protool', // Text logo for dark mode
  btnLink: '/request-demo',
  menuContent: [
    {
      id: 1,
      title: 'Home',
      path: '/', // Only one home link now
      newTab: false,
    },
    {
      id: 2,
      title: 'About',
      path: '/about',
      newTab: false,
    },
    {
      id: 3,
      title: 'Services',
      path: '/services',
      newTab: false,
    },
    {
      id: 4,
      title: 'Core Sections',
      submenu: [
        {
          id: 4.1,
          title: 'Our Team',
          path: '/teams',
          newTab: false,
        },
        {
          id: 4.2,
          title: 'Team Details',
          path: '/teams/1',
          newTab: false,
        },
        {
          id: 4.3,
          title: 'Testimonials',
          path: '/testimonial',
          newTab: false,
        },
        {
          id: 4.4,
          title: 'Integrations',
          path: '/integration',
          newTab: false,
        },
        {
          id: 4.5,
          title: 'FAQs',
          path: '/faq',
          newTab: false,
        },
        {
          id: 4.6,
          title: 'Pricing',
          path: '/price',
          newTab: false,
        },
        {
          id: 4.7,
          title: 'Career Opportunities',
          path: '/career',
          newTab: false,
        },
        {
          id: 4.8,
          title: 'Job Detail - Business Administrator',
          path: '/career/business-administrator',
          newTab: false,
        },
        {
          id: 4.9,
          title: 'Login',
          path: '/login',
          newTab: false,
        },
        {
          id: 4.11,
          title: 'Sign Up',
          path: '/signup',
          newTab: false,
        },
      ],
    },
    {
      id: 5,
      title: 'News & Insights',
      submenu: [
        {
          id: 5.1,
          title: 'Blog Grid',
          path: '/blog',
          newTab: false,
        },
        {
          id: 5.2,
          title: 'Blog List',
          path: '/blog-list',
          newTab: false,
        },
        {
          id: 5.3,
          title: 'Blog Categories',
          path: '/categories',
          newTab: false,
        },
        {
          id: 5.4,
          title: 'Blog Tags',
          path: '/tags',
          newTab: false,
        },
      ],
    },
    {
      id: 6,
      title: 'Contact',
      path: '/contact',
      newTab: false,
    },
  ],
};
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/group.svg',
    imageDark: '/images/clients/group-dark.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/infinity.svg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/artifact.svg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/caudile.svg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/axeptio.svg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/mfinity.svg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
];

export const ServiceData = [
  {
    id: 1,
    slug: 'investment-bank',
    title: 'Investment Banks',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 2,
    slug: 'sales',
    title: 'Sales & Trading',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/sales.svg',
    iconDark: '/images/services/sales-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 3,
    slug: 'mortage-loan',
    title: 'Mortgage Loans',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/loan.svg',
    iconDark: '/images/services/loan-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 4,
    slug: 'finance-analyse',
    title: 'Finance Analysis',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/finance.svg',
    iconDark: '/images/services/finance-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 5,
    slug: 'effeciency',
    title: 'Increased Efficiency',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/effeciency.svg',
    iconDark: '/images/services/effeciency-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 6,
    slug: 'fund',
    title: 'Fundraising Advice',
    excerpt:
      'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/fund.svg',
    iconDark: '/images/services/fund-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: 'It’s scalable and secure',
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
];

export const CounterData = [
  {
    id: 1,
    number: '60',
    rightIcon: '%',
    text: 'Project Completed',
  },
  {
    id: 2,
    number: '30',
    rightIcon: '+',
    text: 'Team Members',
  },
  {
    id: 3,
    number: '40',
    rightIcon: 'K',
    text: 'Satisfied Clients',
  },
];

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is a business agency?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What services does a business agency provide?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How often should I update my website?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'How do subscriptions work?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: 'What other services are you compatible with?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What other services are you compatible with?',
    answer:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin.",
  },
];

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.svg',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 4,
    author: {
      name: 'Robert Frost',
      designation: 'Lead Developer',
      image: '/images/testimonial/avatar1.png',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Guy Hawkins',
      designation: 'Developer',
      image: '/images/testimonial/avatar2.png',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.svg',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 3,
    author: {
      name: 'Cody Fisher',
      designation: 'UI Designer',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.svg',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 2,
    author: {
      name: 'Albert Flores',
      designation: 'Sr. Developer',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.svg',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 1,
    author: {
      name: 'Floyed Miles',
      designation: 'Junior Designer',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.svg',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
    rating: 5,
    author: {
      name: 'Bessie Cooper',
      designation: 'Manager',
      image: '/images/testimonial/avatar6.png',
    },
  },
];

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Capterra',
    desc: 'Top Customer Fulfilment',
  },
  {
    id: 2,
    rating: 4.6,
    name: 'Capterra',
    desc: 'Best Payment Software',
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Trustpilot',
    desc: 'Top Payment Company',
  },
];
export const CoreFeatures = [
  {
    id: 1,
    title: 'Custom Web & App Development',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'We offer tailor-made solutions for websites and mobile apps that cater to your business needs and drive success.',
  },
  {
    id: 2,
    title: 'Data-Driven Insights & Reports',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'Our advanced analytics and reporting help businesses make informed decisions based on data-driven insights.',
  },
  {
    id: 3,
    title: 'Inventory & Product Management',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'Streamline your business operations with our effective inventory management systems for smooth tracking and control.',
  },
  {
    id: 4,
    title: 'Optimized Expense Management',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'Manage and track your business expenses effectively with our automated expense management solutions.',
  },
  {
    id: 5,
    title: 'Seamless Receipt Organization',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'Keep all your business receipts organized and accessible with our user-friendly receipt management system.',
  },
  {
    id: 6,
    title: 'Mobile App for Business',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'Enhance customer engagement and streamline business operations with our fully customized mobile applications.',
  },
];

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Useful Features',
    desc: 'Protool offers a variety of essential features to streamline your financial management, making processes efficient and user-friendly.',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: '100% Secure',
    desc: 'With Protool, your financial data is completely secure with top-of-the-line encryption and security measures in place.',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Cashback Program',
    desc: 'Take advantage of Protool’s cashback program, which rewards you for your transactions and helps you save more.',
  },
];

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Starter Plan',
    desc: 'Ideal for small businesses looking to get online with a professional website.',
    priceMonthly: '₹1,577.00', // Monthly INR
    priceYearly: '₹19,090.00', // Yearly INR
    save: '',
    priceList: [
      {
        name: 'Custom Website Design',
      },
      {
        name: 'Responsive Layout',
      },
      {
        name: 'Basic SEO Optimization',
      },
      {
        name: '1 Year Hosting Included',
      },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'Standard',
    desc: 'Perfect for growing businesses that need advanced features and marketing support.',
    priceMonthly: '₹2,656.00', // Monthly INR
    priceYearly: '₹29,050.00', // Yearly INR
    save: '40%',
    priceList: [
      {
        name: 'Custom Website Design',
      },
      {
        name: 'Responsive Layout',
      },
      {
        name: 'Advanced SEO Optimization',
      },
      {
        name: '1 Year Hosting & Maintenance',
      },
      {
        name: 'Social Media Integration',
      },
      {
        name: 'Basic Digital Marketing Strategy',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Premium',
    desc: 'For businesses that require cutting-edge designs, advanced functionality, and a full suite of marketing services.',
    priceMonthly: '₹3,984.00', // Monthly INR
    priceYearly: '₹44,030.00', // Yearly INR
    save: '',
    priceList: [
      {
        name: 'Custom Website Design & Development',
      },
      {
        name: 'Fully Responsive Layout',
      },
      {
        name: 'Advanced SEO Optimization & Content Marketing',
      },
      {
        name: '2 Years Hosting & Maintenance',
      },
      {
        name: 'Full Social Media Strategy & Integration',
      },
      {
        name: 'Paid Ad Campaign Management',
      },
      {
        name: 'Branding & Graphic Design Support',
      },
    ],
  },
];

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
];

export const teamData = [
  {
    id: 1,
    name: 'Rehan Gull',
    designation: 'COO',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'The operational backbone of our company, Rehan ensures seamless execution and efficient workflows, keeping our projects on track.',
    email: 'rehan@protool.co.in',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Suhaib S Z',
    designation: 'Founder and CEO',
    fbLink: '#',
    dribbleInLink: 'https://suhaib.protool.co.in',
    gitHubLink: 'https://github.com/Suhaib3100',
    linkedInLink: 'https://in.linkedin.com/in/suhaib-sz',
    image: '/images/team/team1.png',
    details:
      'A visionary leader, Suhaib drives our mission forward with creativity, innovation, and a commitment to excellence.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Anuraag R',
    designation: 'Chief Marketing Officer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: 'https://github.com/AnuraagR9251',
    linkedInLink: 'https://www.linkedin.com/in/anuraagr9251/',
    image: '/images/team/team7.png',
    details:
      ' With a knack for strategy and communication, Anuraag spearheads our marketing efforts to connect with our audience and build meaningful relationships..',
    email: 'anuraag@protool.co.in',
    phone: '+91 8147148708',
  },
  // {
  //   id: 4,
  //   name: 'Wade Wareen',
  //   designation: 'Designer',
  //   fbLink: '#',
  //   dribbleInLink: '#',
  //   gitHubLink: '#',
  //   linkedInLink: '#',
  //   image: '/images/team/team4.png',
  //   details:
  //     'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
  //   email: 'team@gmail.com',
  //   phone: '+3 230 705 5448',
  // },
  // {
  //   id: 5,
  //   name: 'Bessie Cooper',
  //   designation: 'Product Manager',
  //   fbLink: '#',
  //   dribbleInLink: '#',
  //   gitHubLink: '#',
  //   linkedInLink: '#',
  //   image: '/images/team/team5.png',
  //   details:
  //     'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
  //   email: 'team@gmail.com',
  //   phone: '+3 230 705 5448',
  // },
  // {
  //   id: 6,
  //   name: 'Jacob Jones',
  //   designation: 'Art Director',
  //   fbLink: '#',
  //   dribbleInLink: '#',
  //   gitHubLink: '#',
  //   linkedInLink: '#',
  //   image: '/images/team/team6.png',
  //   details:
  //     'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
  //   email: 'team@gmail.com',
  //   phone: '+3 230 705 5448',
  // },
];

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Our Passion',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Transparency',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Our Mission',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
];

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.png',
  },
  {
    id: 2,
    image: '/images/about/suhaibmain.jpg',
  },
  {
    id: 3,
    image: '/images/about/about3.png',
  },
];

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details:
      'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
];

export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-dark-1.svg',
  footerText:
    'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
  copyright: `${new Date().getFullYear()} Protool. All Rights Reserved`,
  email: 'suhaib@protool.co.in',
  phone: '+91 8310090539',
  logoDarkStyle: {
    width: '200px', // Set your desired width
    height: '60px', // Set your desired height
  },

  expolre: [
    {
      id: 1,
      name: 'About',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Career',
      link: '/career',
    },
    {
      id: 4,
      name: 'Payment',
      link: '/home-2',
    },
    {
      id: 5,
      name: 'Pricing',
      link: '/price',
    },
    {
      id: 6,
      name: "Faq's",
      link: '/faq',
    },
    {
      id: 7,
      name: 'Testimonials',
      link: '/testimonial',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Banking',
      link: '/home-3',
    },
    {
      id: 2,
      name: 'Team',
      link: '/teams',
    },
    {
      id: 3,
      name: 'Integration',
      link: '/integration',
    },
    {
      id: 4,
      name: 'Blog',
      link: '/blog',
    },
    {
      id: 5,
      name: 'Log In',
      link: '/login',
    },
    {
      id: 6,
      name: 'Sign Up',
      link: '/signup',
    },
    {
      id: 7,
      name: '404',
      link: '/not-found',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
};
