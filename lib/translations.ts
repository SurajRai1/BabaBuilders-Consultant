export type Language = 'en' | 'ne';

export interface Translations {
  header: {
    tagline: string;
    chapters: string;
    studioInquiries: string;
    locationLabel: string;
    locationValue: string;
    directContactLabel: string;
    connectLabel: string;
    startBuildLabel: string;
    scheduleConsultation: string;
    footerOrg: string;
    footerCoords: string;
  };
  hero: {
    location: string;
    since: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    exploreServices: string;
    viewWork: string;
  };
  marquee: string[];
  about: {
    kickerNumber: string;
    kickerText: string;
    headingLine1: string;
    headingLine2: string;
    lead: string;
    body: string;
    approachLink: string;
    captionLine1: string;
    captionLine2: string;
  };
  approach: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    taglineLine1: string;
    taglineLine2: string;
    startProject: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  services: {
    heading: string;
    items: {
      number: string;
      activeNum: string;
      totalNum: string;
      title: string;
      subtitle: string;
      description: string;
      tag: string;
      cta: string;
      image: string;
    }[];
  };
  projects: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    viewAll: string;
    items: {
      title: string;
      category: string;
      image: string;
      size: 'large' | 'small';
    }[];
  };
  statement: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    body: string;
    promises: string[];
  };
  cta: {
    headingLine1: string;
    headingLine2: string;
    body: string;
    button: string;
    note: string;
  };
  contact: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      projectTypeLabel: string;
      selectProject: string;
      types: {
        residential: string;
        commercial: string;
        renovation: string;
        consultation: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
    };
    info: {
      officeTitle: string;
      officeAddress1: string;
      officeAddress2: string;
      callTitle: string;
      callHours: string;
      emailTitle: string;
      emailResponse: string;
    };
  };
  footer: {
    taglineLine1: string;
    taglineLine2: string;
    nav: {
      home: string;
      about: string;
      approach: string;
      services: string;
      projects: string;
      contact: string;
    };
    copyright: string;
    location: string;
  };
  navChapters: {
    num: string;
    title: string;
    desc: string;
    href: string;
  }[];
  cursor: {
    view: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      tagline: 'Builders & Consultant',
      chapters: 'CHAPTERS',
      studioInquiries: 'STUDIO / INQUIRIES',
      locationLabel: 'LOCATION',
      locationValue: 'Dharan Road, Sunsari\nKoshi Province, Nepal',
      directContactLabel: 'DIRECT CONTACT',
      connectLabel: 'CONNECT WITH US',
      startBuildLabel: 'START YOUR BUILD',
      scheduleConsultation: 'Schedule Consultation',
      footerOrg: 'BABA BUILDERS & CONSULTANT',
      footerCoords: "SUNSARI, NEPAL — 26° 39' N / 87° 20' E",
    },
    hero: {
      location: 'Sunsari, Nepal',
      since: 'Since 2022',
      titleLine1: 'Build a place',
      titleLine2: 'to belong.',
      description:
        'Thoughtful design, trusted guidance and construction with purpose. From your first naksha to the final detail.',
      exploreServices: 'Explore our services',
      viewWork: 'View our work',
    },
    marquee: [
      'Naksha Pass',
      'House Design',
      'Construction',
      'Consultancy',
      'Renovation',
      'Estimation',
      'Supervision',
      'Architecture',
    ],
    about: {
      kickerNumber: '01',
      kickerText: 'The BABA standard',
      headingLine1: 'More than a building.',
      headingLine2: 'A considered beginning.',
      lead: 'Every home starts with a vision. We bring the clarity, craft and care to shape it into something enduring.',
      body: 'At BABA Builders & Consultant, we support you from the first conversation and house plan through approvals, construction and completion. Our work is grounded in practical thinking, honest guidance and a deep respect for the details that make a space feel like yours.',
      approachLink: 'Discover our approach',
      captionLine1: 'Built with clarity.',
      captionLine2: 'Guided with care.',
    },
    approach: {
      kicker: '02 / Our approach',
      headingLine1: 'Every decision',
      headingLine2: 'has a purpose.',
      taglineLine1: 'One team. One clear direction.',
      taglineLine2: 'A better way to build.',
      startProject: 'Start your project',
      steps: [
        {
          number: '01',
          title: 'Understand',
          description:
            'We listen closely to your needs, your site and the life you want to create there.',
        },
        {
          number: '02',
          title: 'Shape',
          description:
            'We turn the possibilities into a considered plan that is practical, personal and ready to move forward.',
        },
        {
          number: '03',
          title: 'Deliver',
          description:
            'We stay close to the work, protecting the vision through every stage of construction.',
        },
      ],
    },
    services: {
      heading: 'Services',
      items: [
        {
          number: '01',
          activeNum: '01',
          totalNum: '03',
          title: 'Planning & Approval',
          subtitle: 'Naksha pass, permits & legal clearance',
          description:
            'Every enduring home begins with absolute clarity. We translate your family lifestyle, budget, and land dimensions into precision architectural drawings and municipality-approved blueprints — securing fast municipal pass before breaking ground.',
          tag: 'Municipality Approved',
          cta: 'Start Your Plan',
          image:
            'https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1400',
        },
        {
          number: '02',
          activeNum: '02',
          totalNum: '03',
          title: 'Design & Visualization',
          subtitle: 'Modern aesthetics & spatial harmony',
          description:
            'Thoughtful spaces sculpted around sunlight, ventilation, and contemporary living. Photorealistic 3D exterior elevations and interior floor plans let you walk through and refine every space before the first brick is laid.',
          tag: '3D & Engineering',
          cta: 'Explore 3D Design',
          image: '/images/project-modern-1.png',
        },
        {
          number: '03',
          activeNum: '03',
          totalNum: '03',
          title: 'Construction & Advisory',
          subtitle: 'From foundation to turnkey finishing',
          description:
            'Reliable on-site supervision, material estimation, contractor hiring, and complete structural management. From the first concrete pour to interior finishing, our licensed engineers protect your investment till the keys are in your hand.',
          tag: 'Turnkey Building',
          cta: 'Build With Us',
          image:
            'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?auto=compress&cs=tinysrgb&w=1400',
        },
      ],
    },
    projects: {
      kicker: '04 / Selected work',
      headingLine1: 'Spaces with',
      headingLine2: 'quiet confidence.',
      viewAll: 'View all projects',
      items: [
        {
          title: 'The Courtyard Residence',
          category: 'Residential / New Build',
          image: '/images/project-modern-1.png',
          size: 'large',
        },
        {
          title: 'A Quiet Modern Home',
          category: 'Residential / Design',
          image: '/images/project-modern-2.png',
          size: 'small',
        },
        {
          title: 'Crafted From The Ground Up',
          category: 'Construction / Supervision',
          image: '/images/project-modern-3.png',
          size: 'small',
        },
        {
          title: 'Light, Space & Belonging',
          category: 'Residential / Architecture',
          image: '/images/project-villa.png',
          size: 'large',
        },
      ],
    },
    statement: {
      kicker: '05 / Our promise',
      headingLine1: 'Good buildings are',
      headingLine2: 'felt before they are seen.',
      body: 'In the light of a room. In the confidence of a sound decision. In the feeling that everything is exactly where it should be.',
      promises: ['Honest guidance', 'Lasting quality', 'Detail-led delivery'],
    },
    cta: {
      headingLine1: 'Have a vision?',
      headingLine2: "Let's give it form.",
      body: "Whether it's a new home from the ground up, a renovation, or guidance through a build you're managing yourself, we're here to help at every step.",
      button: 'Start a conversation',
      note: 'Your project begins with a clear conversation. No commitment, no pressure — just the right first step.',
    },
    contact: {
      kicker: 'Get in Touch',
      headingLine1: 'Ready to build?',
      headingLine2: "Let's talk.",
      subtitle:
        "Share your vision with us. Whether you're planning a new home, renovation, or commercial project — we're here to guide you from concept to completion.",
      form: {
        nameLabel: 'Full Name *',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email Address *',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+977 98X-XXXXXXX',
        projectTypeLabel: 'Project Type',
        selectProject: 'Select a project type',
        types: {
          residential: 'Residential Home',
          commercial: 'Commercial Building',
          renovation: 'Renovation / Remodel',
          consultation: 'Consultation / Naksha',
          other: 'Other',
        },
        messageLabel: 'Your Message *',
        messagePlaceholder:
          'Tell us about your project vision, timeline, budget range, or any questions you have...',
        submitBtn: 'Send Message',
        submittingBtn: 'Sending...',
        successTitle: 'Message Sent!',
        successMessage:
          'Thank you for reaching out. Our team will get back to you within 24 hours.',
      },
      info: {
        officeTitle: 'Visit Our Office',
        officeAddress1: 'Dharan Road, Sunsari',
        officeAddress2: 'Koshi Province, Nepal',
        callTitle: 'Call Us',
        callHours: 'Mon – Sat, 9AM – 6PM',
        emailTitle: 'Email Us',
        emailResponse: 'We respond within 24 hours',
      },
    },
    footer: {
      taglineLine1: 'Building a place',
      taglineLine2: 'to belong.',
      nav: {
        home: 'Home',
        about: 'About',
        approach: 'Approach',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      },
      copyright: '© BABA Builders & Consultant',
      location: 'Sunsari, Nepal',
    },
    navChapters: [
      {
        num: '01',
        title: 'About Us',
        desc: 'The BABA standard & building legacy in Sunsari',
        href: '#about',
      },
      {
        num: '02',
        title: 'Our Approach',
        desc: 'Architectural planning, engineering & municipal naksha',
        href: '#approach',
      },
      {
        num: '03',
        title: 'Services',
        desc: 'Full-cycle consultancy, supervision & finishing',
        href: '#services',
      },
      {
        num: '04',
        title: 'Selected Works',
        desc: 'Enduring residential homes and commercial builds',
        href: '#projects',
      },
      {
        num: '05',
        title: 'Contact Us',
        desc: 'Get in touch with our architects & engineers',
        href: '#contact',
      },
    ],
    cursor: {
      view: 'View',
    },
  },
  ne: {
    header: {
      tagline: 'बिल्डर्स एण्ड कन्सल्टेन्ट',
      chapters: 'खण्डहरू',
      studioInquiries: 'स्टुडियो / सोधपुछ',
      locationLabel: 'कार्यालय ठेगाना',
      locationValue: 'धरान रोड, सुनसरी\nकोशी प्रदेश, नेपाल',
      directContactLabel: 'प्रत्यक्ष सम्पर्क',
      connectLabel: 'हामीसँग जोडिनुहोस्',
      startBuildLabel: 'निर्माण सुरु गर्नुहोस्',
      scheduleConsultation: 'परामर्श लिनुहोस्',
      footerOrg: 'बाबा बिल्डर्स एण्ड कन्सल्टेन्ट',
      footerCoords: "सुनसरी, नेपाल — २६° ३९' उ / ८७° २०' पू",
    },
    hero: {
      location: 'सुनसरी, नेपाल',
      since: 'स्थापना २०२२',
      titleLine1: 'आफ्नोपन महसुस हुने',
      titleLine2: 'स्थान निर्माण गर्दै।',
      description:
        'सोचविचारपूर्ण डिजाइन, भरपर्दो मार्गदर्शन र उद्देश्यपूर्ण निर्माण। पहिलो नक्सादेखि अन्तिम सजावटसम्म।',
      exploreServices: 'हाम्रा सेवाहरू हेर्नुहोस्',
      viewWork: 'हाम्रो काम हेर्नुहोस्',
    },
    marquee: [
      'नक्सा पास',
      'घर डिजाइन',
      'भवन निर्माण',
      'परामर्श',
      'पुनर्निर्माण',
      'लागत अनुमान',
      'सुपरिवेक्षण',
      'वास्तुकला',
    ],
    about: {
      kickerNumber: '०१',
      kickerText: 'बाबा मापदण्ड',
      headingLine1: 'भवन मात्र होइन।',
      headingLine2: 'एक सुविचारित सुरुवात।',
      lead: 'हरेक घरको सुरुवात एउटा सपनाबाट हुन्छ। हामी स्पष्टता, शिल्प र समर्पणका साथ त्यसलाई दीर्घकालीन रूप दिन्छौं।',
      body: 'बाबा बिल्डर्स एण्ड कन्सल्टेन्टमा, हामी पहिलो कुराकानी र घरको नक्सादेखि स्वीकृति, निर्माण र सम्पन्नतासम्म तपाईंसँगै रहन्छौं। हाम्रो काम व्यावहारिक सोच, इमानदार सल्लाह र तपाईंको स्थानलाई आफ्नै बनाउने प्रत्येक विवरणप्रतिको सम्मानमा आधारित छ।',
      approachLink: 'हाम्रो दृष्टिकोण जान्नुहोस्',
      captionLine1: 'स्पष्टताका साथ निर्मित।',
      captionLine2: 'हेरचाहका साथ निर्देशित।',
    },
    approach: {
      kicker: '०२ / हाम्रो दृष्टिकोण',
      headingLine1: 'हरेक निर्णयको',
      headingLine2: 'एउटा उद्देश्य हुन्छ।',
      taglineLine1: 'एउटै टिम। एउटै स्पष्ट दिशा।',
      taglineLine2: 'निर्माणको उत्कृष्ट तरिका।',
      startProject: 'योजना सुरु गर्नुहोस्',
      steps: [
        {
          number: '०१',
          title: 'बुझ्ने',
          description:
            'हामी तपाईंको आवश्यकता, जग्गा र तपाईंले चाहेको जीवनशैलीलाई ध्यानपूर्वक सुन्छौं।',
        },
        {
          number: '०२',
          title: 'आकार दिने',
          description:
            'हामी सम्भावनाहरूलाई व्यावहारिक, व्यक्तिगत र निर्माणका लागि तयार योजनामा ढाल्छौं।',
        },
        {
          number: '०३',
          title: 'सम्पन्न गर्ने',
          description:
            'हामी कामको प्रत्यक्ष निगरानी गर्छौं, निर्माणको हरेक चरणमा तपाईंको सपनालाई जोगाउँछौं।',
        },
      ],
    },
    services: {
      heading: 'सेवाहरू',
      items: [
        {
          number: '०१',
          activeNum: '०१',
          totalNum: '०३',
          title: 'योजना तथा स्वीकृति',
          subtitle: 'नक्सा पास, अनुमति र कानुनी स्वीकृति',
          description:
            'हरेक बलियो घरको सुरुवात पूर्ण स्पष्टताबाट हुन्छ। हामी तपाईंको पारिवारिक जीवनशैली, बजेट र जग्गाको क्षेत्रफललाई यथार्थपरक नक्सा र नगरपालिका-स्वीकृत ब्लुप्रिन्टमा उतार्छौं — काम सुरु गर्नुअघि छिटो नक्सा पास सुनिश्चित गर्दै।',
          tag: 'नगरपालिका स्वीकृत',
          cta: 'योजना सुरु गर्नुहोस्',
          image:
            'https://images.pexels.com/photos/8961133/pexels-photo-8961133.jpeg?auto=compress&cs=tinysrgb&w=1400',
        },
        {
          number: '०२',
          activeNum: '०२',
          totalNum: '०३',
          title: 'डिजाइन तथा थ्रीडी भिजुअलाइजेसन',
          subtitle: 'आधुनिक सौन्दर्य र उज्यालोपनको सन्तुलन',
          description:
            'घामको प्रकाश, हावाको बहाव र आधुनिक जीवनशैलीलाई ध्यानमा राखेर डिजाइन गरिएका स्थानहरू। फोटो-रियालिस्टिक थ्रीडी इलिभेसन र आन्तरिक फ्लोर प्लानहरूले पहिलो इँटा राख्नुअगावै तपाईंलाई हरेक कोठा प्रत्यक्ष अनुभव गर्न दिन्छ।',
          tag: 'थ्रीडी र इन्जिनियरिङ',
          cta: 'थ्रीडी डिजाइन हेर्नुहोस्',
          image: '/images/project-modern-1.png',
        },
        {
          number: '०३',
          activeNum: '०३',
          totalNum: '०३',
          title: 'निर्माण तथा प्राविधिक सल्लाह',
          subtitle: 'जगदेखि चाबी हस्तान्तरणसम्म',
          description:
            'भरपर्दो कार्यस्थल सुपरिवेक्षण, निर्माण सामग्री अनुमान, दक्ष जनशक्ति परिचालन र पूर्ण संरचनात्मक व्यवस्थापन। जग खन्नेदेखि भित्री फिनिसिङसम्म, हाम्रा इजाजतपत्र प्राप्त इन्जिनियरहरूले तपाईंको लगानीको सुरक्षा गर्छन्।',
          tag: 'टर्नकी निर्माण',
          cta: 'हामीसँग निर्माण गर्नुहोस्',
          image:
            'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?auto=compress&cs=tinysrgb&w=1400',
        },
      ],
    },
    projects: {
      kicker: '०४ / छानिएका कामहरू',
      headingLine1: 'शान्त आत्मविश्वासले',
      headingLine2: 'भरिएका स्थानहरू।',
      viewAll: 'सबै परियोजनाहरू हेर्नुहोस्',
      items: [
        {
          title: 'द कोर्टयार्ड रेसिडेन्स',
          category: 'आवासीय / नयाँ निर्माण',
          image: '/images/project-modern-1.png',
          size: 'large',
        },
        {
          title: 'शान्त आधुनिक घर',
          category: 'आवासीय / डिजाइन',
          image: '/images/project-modern-2.png',
          size: 'small',
        },
        {
          title: 'जगैदेखि निर्मित',
          category: 'निर्माण / सुपरिवेक्षण',
          image: '/images/project-modern-3.png',
          size: 'small',
        },
        {
          title: 'उज्यालो, खुलापन र अपनत्व',
          category: 'आवासीय / वास्तुकला',
          image: '/images/project-villa.png',
          size: 'large',
        },
      ],
    },
    statement: {
      kicker: '०५ / हाम्रो प्रतिबद्धता',
      headingLine1: 'राम्रा भवनहरू',
      headingLine2: 'देखिनुअघि नै महसुस हुन्छन्।',
      body: 'कोठाको उज्यालोमा। सही निर्णयको आत्मविश्वासमा। हरेक चिज हुनुपर्ने ठाउँमै छ भन्ने अनुभूतिमा।',
      promises: ['इमानदार मार्गदर्शन', 'दीर्घकालीन गुणस्तर', 'विवरणमा आधारित निर्माण'],
    },
    cta: {
      headingLine1: 'कुनै सपना छ?',
      headingLine2: 'आउनुहोस् आकार दिऔं।',
      body: 'जगैदेखि नयाँ घर निर्माण होस्, पुनर्निर्माण होस् वा तपाईं आफैंले गरिरहेको निर्माणमा प्राविधिक सल्लाह — हामी हरेक पाइलामा साथ दिन तयार छौं।',
      button: 'कुराकानी सुरु गर्नुहोस्',
      note: 'तपाईंको परियोजना एउटा स्पष्ट कुराकानीबाट सुरु हुन्छ। कुनै बाध्यता छैन, कुनै दबाब छैन — केवल सही पहिलो पाइला।',
    },
    contact: {
      kicker: 'सम्पर्कमा रहनुहोस्',
      headingLine1: 'निर्माणका लागि तयार हुनुहुन्छ?',
      headingLine2: 'आउनुहोस् कुरा गरौं।',
      subtitle:
        'हामीसँग आफ्नो सपना बाँड्नुहोस्। तपाईं नयाँ घर, पुनर्निर्माण वा व्यावसायिक भवन बनाउने सोचमा हुनुहुन्छ भने — हामी अवधारणादेखि सम्पन्नतासम्म तपाईंलाई मार्गदर्शन गर्न यहाँ छौं।',
      form: {
        nameLabel: 'पूरा नाम *',
        namePlaceholder: 'तपाईंको पूरा नाम',
        emailLabel: 'इमेल ठेगाना *',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'फोन नम्बर',
        phonePlaceholder: '+९७७ ९८X-XXXXXXX',
        projectTypeLabel: 'परियोजनाको प्रकार',
        selectProject: 'परियोजनाको प्रकार रोज्नुहोस्',
        types: {
          residential: 'आवासीय घर',
          commercial: 'व्यापारिक भवन',
          renovation: 'पुनर्निर्माण / मर्मत',
          consultation: 'परामर्श / नक्सा पास',
          other: 'अन्य',
        },
        messageLabel: 'तपाईंको सन्देश *',
        messagePlaceholder:
          'तपाईंको परियोजनाको सोच, समयतालिका, बजेटको दायरा वा कुनै प्रश्न भए हामीलाई बताउनुहोस्...',
        submitBtn: 'सन्देश पठाउनुहोस्',
        submittingBtn: 'पठाउँदै...',
        successTitle: 'सन्देश पठाइयो!',
        successMessage:
          'सम्पर्क गर्नुभएकोमा धन्यवाद। हाम्रो टिमले २४ घण्टाभित्र तपाईंलाई सम्पर्क गर्नेछ।',
      },
      info: {
        officeTitle: 'हाम्रो कार्यालय आउनुहोस्',
        officeAddress1: 'धरान रोड, सुनसरी',
        officeAddress2: 'कोशी प्रदेश, नेपाल',
        callTitle: 'हामीलाई फोन गर्नुहोस्',
        callHours: 'सोम – शनि, बिहान ९ – साँझ ६',
        emailTitle: 'इमेल गर्नुहोस्',
        emailResponse: 'हामी २४ घण्टाभित्र जवाफ दिन्छौं',
      },
    },
    footer: {
      taglineLine1: 'आफ्नोपन महसुस हुने',
      taglineLine2: 'स्थान निर्माण गर्दै।',
      nav: {
        home: 'गृहपृष्ठ',
        about: 'हाम्रो बारेमा',
        approach: 'दृष्टिकोण',
        services: 'सेवाहरू',
        projects: 'परियोजनाहरू',
        contact: 'सम्पर्क',
      },
      copyright: '© बाबा बिल्डर्स एण्ड कन्सल्टेन्ट',
      location: 'सुनसरी, नेपाल',
    },
    navChapters: [
      {
        num: '०१',
        title: 'हाम्रो बारेमा',
        desc: 'सुनसरीमा बाबा स्ट्यान्डर्ड र निर्माण विरासत',
        href: '#about',
      },
      {
        num: '०२',
        title: 'हाम्रो दृष्टिकोण',
        desc: 'वास्तुकला योजना, इन्जिनियरिङ र नगरपालिका नक्सा',
        href: '#approach',
      },
      {
        num: '०३',
        title: 'सेवाहरू',
        desc: 'पूर्ण परामर्श, प्राविधिक सुपरिवेक्षण र फिनिसिङ',
        href: '#services',
      },
      {
        num: '०४',
        title: 'छानिएका निर्माणहरू',
        desc: 'दीर्घकालीन आवासीय घर तथा व्यापारिक भवनहरू',
        href: '#projects',
      },
      {
        num: '०५',
        title: 'सम्पर्क',
        desc: 'हाम्रा आर्किटेक्ट र इन्जिनियरहरूसँग सम्पर्क गर्नुहोस्',
        href: '#contact',
      },
    ],
    cursor: {
      view: 'हेर्नुहोस्',
    },
  },
};
