let tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
        exitOnEsc: true,
        cancelIcon: {
            enabled: true,
        },
    }, 
});

tour.addStep({
    id: "step1",
    title: " Explore Shapel's Interior Magic ✨ ",
    text: "Thank you for visiting. We’re excited to show you around and share our interior design offerings. Let’s explore how we can transform your spaces into something truly special. 🏠🎨",
    buttons: [
        {
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
});
tour.addStep({
  id: "step2",
  title: "📞 Connect with Shapel",
  text: "Reach out to us effortlessly just by clicking Contact Us buttton. Whether you have questions, need assistance, or want to start your design journey, we're here to help. Let's create something beautiful together! 🌟",
  attachTo: {
    element: ".slider-link",
    on: "left",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});
tour.addStep({
    id: "step3",
    title: "Discover Shapel's Essence",
    text: "Click to embark on a guided tour of Shapel's website. Learn about us, explore our Gallery, discover our Services, and stay updated with our Blog. Let's start exploring!🌟",
    attachTo: {
      element: ".custom_menu-btn",
      on: "left",
    },
    buttons: [
      {
        text: "Back",
        action() {
          return this.back();
        },
      },
      {
        text: "Next",
        action() {
          return this.next();
        },
      },
    ],
  });
tour.addStep({
  id: "step4",
  title: "Know About Shapel",
  text: "Dive into Shapel's artistry. Explore our portfolio of stunning designs, crafted with meticulous attention to detail. Experience the transformative power of our work as we bring visions to life. 🖼️",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".container",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});

tour.addStep({
  id: "step5",
  title: "Welcome to Our Gallery! 🎨",
  text: "Explore our collection of stunning designs and inspiring interiors. Each project showcases our commitment to creativity and quality. Click on the images to see the interiors in detail. 🖼️",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".gallery_section",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});
tour.addStep({
  id: "step6",
  title: "Explore Our Services!🌟",
  text: "From custom designs to full renovations, we bring your vision to life. Click through to see how we can create your perfect space.✨",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".service_section",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});
tour.addStep({
  id: "step7",
  title: "Check Out Our Latest Blog! 📝",
  text: "Stay updated with the newest trends, tips, and insights in interior design. Click through to read our latest posts and get inspired.",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".blog_section",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});
tour.addStep({
  id: "step8",
  title: "Hear from Our Happy Clients! 🌟",
  text: "See what our clients are saying about their experiences with us. Click through to read their stories and discover how we’ve transformed their spaces.",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".client_section",
    on: "bottom",
  },
  buttons: [
    {
      text: "Back",
      action() {
        return this.back();
      },
    },
    {
      text: "Next",
      action() {
        return this.next();
      },
    },
  ],
});
tour.addStep({
  id: "step9",
  title: "Stay Updated with Our Newsletter! 📬",
  text: "Don’t miss out on the latest trends, tips, and exclusive offers. Subscribe to our newsletter and be the first to know! Join us today! 📰✨",
  scrollTo: {
    behavior: 'smooth',
    block: 'center'
  },
  attachTo: {
    element: ".btn",
    on: "bottom",
  },
  buttons: [
    {
      text: "Done",
      action() {
        return this.next();
      },
    },
  ],
});


tour.start();