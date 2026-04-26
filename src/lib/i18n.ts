import realEstate from "@/assets/x real.jpeg";
import decor from "@/assets/sheno decor.jpeg";
import carbongene from "@/assets/carbogene.png";
import shaheendesigns from "@/assets/sheno designs.jpeg";
import arqava from "@/assets/arqava.jpeg";
import king from "@/assets/king.jpeg";
import dr from "@/assets/dr.khaled.jpeg";
import isv from "@/assets/is vision.jpeg";
import volare from "@/assets/volare.jpeg";
import alia from "@/assets/alia.jpeg";
import trivia from "@/assets/trivia.jpeg";
import ahmedreal from "@/assets/ahmed real.jpeg"

export type Lang = "en" | "ar";

export const translations = {
  en: {
    brand: {
  first: "X",
  second: "Tech"
},
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      cta: "Start Project",
      
    },
    hero: {
      eyebrow: "Marketing · Technology · Automation",
      title1: "We Build Brands.",
      title2: "We Scale Businesses.",
      subtitle:
        "A full-service tech & marketing agency crafting premium digital experiences, automations, and growth systems.",
      ctaPrimary: "Start Your Project",
      ctaWhatsapp: "Chat on WhatsApp",
    },
    clients: {
      title: "Trusted across industries",
      items: [
    {name:"Carbongene",category:"Car Care Center", image: carbongene },
    {name:"Shaheen Farouk Designs",category:"Decor", image: shaheendesigns},
    {name: "X Real Estate",category:"Real Estate", image: realEstate },
    {name: "Shaheen Farouk Decor",category:"Decor", image: decor },
    {name:"King House",category:"Clothing Brand", image: king },
    {name:"IS Vision",category:"Decor", image: isv },
    {name:"Arqava",category:"Decor", image: arqava },
    {name:"Dr.Khaled Abdelhameed",category:"Doctor", image: dr },
    {name:"Volare",category:"Decor", image: volare },
    {name:"Alia El Bakry Gallery",category:"Handmade Accessories", image: alia },
    {name:"Trivia Furniture",category:"Decor", image: trivia },
    {name:"AS Real Estate",category:"Real Estate", image: ahmedreal },
  ],

    },
    services: {
      eyebrow: "What we do",
      title: "Services that move the needle",
      subtitle: "End-to-end marketing, design, development and AI automation.",
      items: [
        { title: "Social Media Management", desc: "Content, strategy and engagement that builds real audiences." },
        { title: "Paid Ads Campaigns", desc: "Meta, Google & TikTok ads engineered for ROI." },
        { title: "Branding & Strategy", desc: "Identity systems and positioning that command attention." },
        { title: "Web & App Development", desc: "High-performance sites, dashboards and mobile apps." },
        { title: "Design & VFX", desc: "Graphic design, motion and visual effects with cinematic polish." },
        { title: "Photo & Video Production", desc: "Ad creatives, product shoots and brand films." },
        { title: "Cybersecurity", desc: "Audits, hardening and protection for modern stacks." },
        { title: "AI Agents & Automation", desc: "Custom AI agents and workflows that run your business 24/7." },
      ],
    },
    why: {
      eyebrow: "Why X Tech",
      title: "Built like a product team. Performs like a growth engine.",
      items: [
        { title: "Data-driven", desc: "Every decision tied to a metric." },
        { title: "Creative + technical", desc: "Designers, engineers and strategists in one room." },
        { title: "Industry-tested", desc: "Real estate to fashion, fitness to automotive." },
        { title: "Full-service", desc: "From idea to launch to scale." },
      ],
    },
    cta: {
      title: "Let's build your next big brand.",
      subtitle: "Tell us what you're working on. We'll tell you how to win.",
      primary: "Contact us",
      whatsapp: "WhatsApp now",
    },
    about: {
      title: "About X Tech Agency",
      lead:
        "We're a hybrid marketing and technology studio helping ambitious brands scale through bold creative, smart engineering, and modern AI systems.",
      visionTitle: "Our Vision",
      visionText:
        "To become the partner of choice for founders and operators who want world-class marketing and tech under one roof.",
      missionTitle: "Our Mission",
      missionText:
        "Deliver measurable growth for every client through data, design and automation — without the agency bloat.",
      industriesTitle: "Industries we serve",
    },
    servicesPage: {
      title: "Our Services",
      lead: "Everything you need to launch, grow and dominate — under one roof.",
      groups: [
        {
          title: "Marketing",
          items: ["Social media management", "Meta / Google / TikTok ads", "Branding & strategy"],
        },
        {
          title: "Development",
          items: ["Websites", "Mobile applications", "Custom dashboards"],
        },
        {
          title: "Creative",
          items: ["Graphic design", "VFX & GFX", "Photo & video production"],
        },
        {
          title: "AI & Tech",
          items: ["AI automation systems", "AI agents", "Business automation tools"],
        },
        {
          title: "Security",
          items: ["Cybersecurity consulting", "System protection", "Audits & hardening"],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      lead: "Tell us about your project — we'll get back within 24 hours.",
      name: "Full name",
      phone: "Phone number",
      email: "Email (optional)",
      service: "Service",
      message: "Message",
      submit: "Send & open WhatsApp",
      services: [
        "Social Media Management",
        "Paid Ads",
        "Branding",
        "Web Development",
        "Mobile App",
        "Design / VFX",
        "Photo / Video",
        "Cybersecurity",
        "AI Automation",
        "Other",
      ],
      success: "Thanks! Opening WhatsApp...",
      requiredError: "Please fix the highlighted fields below.",
      successTitle: "Message sent!",
      successBody: "We just opened WhatsApp so you can finish the conversation. We'll also reply by email within 24 hours.",
      reopenWhatsapp: "Re-open WhatsApp",
      sendAnother: "Send another message",
      errors: {
        name: "Please enter your full name (min 2 characters).",
        phone: "Please enter a valid phone number.",
        email: "Please enter a valid email or leave it empty.",
        service: "Please choose a service.",
        message: "Please write a short message (min 5 characters).",
      },
    },
    footer: {
      tagline: "Marketing. Technology. Automation. Growth.",
      rights: "All rights reserved.",
      explore: "Explore",
      follow: "Follow us",
      contact: "Contact",
    },
  },
  ar: {
    brand: {
  first: "إكس",
  second: "تك"
},
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "تواصل",
      cta: "ابدأ مشروعك",
      
    },
    hero: {
      eyebrow: "تسويق · تكنولوجيا · أتمتة",
      title1: "نبني علامات تجارية.",
      title2: "ونوسّع نطاق الأعمال.",
      subtitle:
        "وكالة تسويق وتكنولوجيا متكاملة تصنع تجارب رقمية فاخرة، أنظمة أتمتة، وحلول نمو حقيقية.",
      ctaPrimary: "ابدأ مشروعك الآن",
      ctaWhatsapp: "تواصل واتساب",
    },
    clients: {
      title: "موثوقون في كل القطاعات",
      items:[
  { name: "كاربونجين", category: "مركز عناية بالسيارات", image: carbongene },
  { name: "تصميمات شاهين فاروق", category: "ديكور", image: shaheendesigns },
  { name: "إكس العقارية", category: "العقارات", image: realEstate },
  { name: "شاهين فاروق ديكور", category: "ديكور", image: decor },
  { name: "كينج هاوس", category: "براند ملابس", image: king },
  { name: "آي إس فيجن", category: "ديكور", image: isv },
  { name: "أركافا", category: "ديكور", image: arqava },
  { name: "د. خالد عبد الحميد", category: "طبيب", image: dr },
  {name:"فولاري",category:"ديكور", image: volare },
  {name:"عليا البكري جاليري",category:"اكسسوارات يدوية", image: alia },
  {name:"تريفيا للأثاث",category:"ديكور", image: trivia },
  {name:"أى أس للعقارات",category:"العقارات", image: ahmedreal },
],
    },
    services: {
      eyebrow: "ماذا نقدم",
      title: "خدمات تصنع فرقًا حقيقيًا",
      subtitle: "تسويق، تصميم، تطوير، وأتمتة بالذكاء الاصطناعي تحت سقف واحد.",
      items: [
        { title: "إدارة السوشيال ميديا", desc: "محتوى واستراتيجية وتفاعل يبني جمهور حقيقي." },
        { title: "الحملات الإعلانية", desc: "إعلانات Meta و Google و TikTok مهندسة للعائد." },
        { title: "الهوية والاستراتيجية", desc: "هويات بصرية ومواقع سوقية تفرض حضورها." },
        { title: "تطوير المواقع والتطبيقات", desc: "مواقع وتطبيقات ولوحات تحكم بأداء عالي." },
        { title: "التصميم والمؤثرات", desc: "جرافيك، موشن، ومؤثرات سينمائية." },
        { title: "إنتاج الصور والفيديو", desc: "إعلانات، تصوير منتجات، وأفلام علامات تجارية." },
        { title: "الأمن السيبراني", desc: "تدقيق وحماية وتأمين للأنظمة الحديثة." },
        { title: "وكلاء الذكاء الاصطناعي", desc: "أنظمة AI تدير أعمالك على مدار الساعة." },
      ],
    },
    why: {
      eyebrow: "لماذا X Tech",
      title: "نعمل كفريق منتج. وننتج كآلة نمو.",
      items: [
        { title: "قرارات بالبيانات", desc: "كل خطوة مربوطة بمؤشر قياس." },
        { title: "إبداع + هندسة", desc: "مصممون ومطورون واستراتيجيون في مكان واحد." },
        { title: "خبرة قطاعية", desc: "من العقارات للأزياء والجيم والسيارات." },
        { title: "خدمة متكاملة", desc: "من الفكرة للإطلاق للتوسع." },
      ],
    },
    cta: {
      title: "خلينا نبني علامتك التجارية الجاية.",
      subtitle: "احكيلنا عن مشروعك ونحنا بنقولك إزاي تكسب.",
      primary: "تواصل معنا",
      whatsapp: "واتساب الآن",
    },
    about: {
      title: "عن X Tech Agency",
      lead:
        "ستوديو هجين بين التسويق والتكنولوجيا، يساعد العلامات الطموحة على التوسع بإبداع جريء وهندسة ذكية وأنظمة AI حديثة.",
      visionTitle: "رؤيتنا",
      visionText:
        "أن نكون الشريك الأول لأصحاب الأعمال الذين يبحثون عن تسويق وتكنولوجيا بمعايير عالمية تحت سقف واحد.",
      missionTitle: "مهمتنا",
      missionText:
        "نمو قابل للقياس لكل عميل عبر البيانات والتصميم والأتمتة — بدون تعقيدات الوكالات التقليدية.",
      industriesTitle: "القطاعات التي نخدمها",
    },
    servicesPage: {
      title: "خدماتنا",
      lead: "كل ما تحتاجه للإطلاق والنمو والسيطرة — تحت سقف واحد.",
      groups: [
        {
          title: "التسويق",
          items: ["إدارة السوشيال ميديا", "إعلانات Meta و Google و TikTok", "الهوية والاستراتيجية"],
        },
        {
          title: "التطوير",
          items: ["المواقع الإلكترونية", "تطبيقات الموبايل", "لوحات تحكم مخصصة"],
        },
        {
          title: "الإبداع",
          items: ["تصميم جرافيك", "VFX و GFX", "إنتاج صور وفيديو"],
        },
        {
          title: "الذكاء الاصطناعي",
          items: ["أنظمة أتمتة AI", "وكلاء AI", "أدوات أتمتة الأعمال"],
        },
        {
          title: "الأمن",
          items: ["استشارات أمن سيبراني", "حماية الأنظمة", "تدقيق وتأمين"],
        },
      ],
    },
    contact: {
      title: "خلينا نتكلم",
      lead: "احكيلنا عن مشروعك — هنرد عليك خلال ٢٤ ساعة.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "الإيميل (اختياري)",
      service: "الخدمة",
      message: "رسالتك",
      submit: "إرسال وفتح واتساب",
      services: [
        "إدارة السوشيال ميديا",
        "إعلانات ممولة",
        "الهوية التجارية",
        "تطوير مواقع",
        "تطبيق موبايل",
        "تصميم / VFX",
        "تصوير / فيديو",
        "أمن سيبراني",
        "أتمتة AI",
        "أخرى",
      ],
      success: "تمام! بنفتح واتساب الآن...",
      requiredError: "من فضلك صحح الحقول المظللة بالأسفل.",
      successTitle: "تم إرسال رسالتك!",
      successBody: "فتحنالك واتساب علشان تكمل المحادثة. هنرد عليك بالإيميل خلال ٢٤ ساعة.",
      reopenWhatsapp: "افتح واتساب مرة أخرى",
      sendAnother: "إرسال رسالة جديدة",
      errors: {
        name: "من فضلك أدخل اسمك بالكامل (حرفين على الأقل).",
        phone: "من فضلك أدخل رقم هاتف صحيح.",
        email: "أدخل إيميل صحيح أو اتركه فارغًا.",
        service: "من فضلك اختر خدمة.",
        message: "اكتب رسالة قصيرة (٥ حروف على الأقل).",
      },
    },
    footer: {
      tagline: "تسويق. تكنولوجيا. أتمتة. نمو.",
      rights: "جميع الحقوق محفوظة.",
      explore: "تصفح",
      follow: "تابعنا",
      contact: "تواصل",
    },
  },
};

export type Translations = (typeof translations)["en"];
