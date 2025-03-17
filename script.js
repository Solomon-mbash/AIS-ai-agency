// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")

  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add("bg-gray-900/90", "backdrop-blur-md", "shadow-lg")
      navbar.classList.remove("bg-transparent")
    } else {
      navbar.classList.remove("bg-gray-900/90", "backdrop-blur-md", "shadow-lg")
      navbar.classList.add("bg-transparent")
    }
  }

  window.addEventListener("scroll", handleScroll)

  // Hero animation
  const heroContent = document.getElementById("hero-content")
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.remove("translate-y-10", "opacity-0")
      heroContent.classList.add("translate-y-0", "opacity-100")
    }, 300)
  }

  // Create animated dots for hero background
  const animatedDots = document.getElementById("animated-dots")
  if (animatedDots) {
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div")
      dot.className = "absolute rounded-full"

      // Random size
      const size = Math.random() * 10 + 5
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`

      // Random position
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`

      // Random color
      const r = Math.random() * 100 + 100
      const g = Math.random() * 100 + 100
      const b = Math.random() * 255
      dot.style.background = `rgba(${r}, ${g}, ${b}, 0.7)`
      dot.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(${r}, ${g}, ${b}, 0.7)`

      // Animation
      dot.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`
      dot.style.animationDelay = `${Math.random() * 5}s`

      animatedDots.appendChild(dot)
    }
  }

  // Services data
  const services = [
    {
      title: "AI Chatbots",
      description: "We build intelligent AI chatbots and virtual assistants that enhance customer interactions, automate support, and streamline business communication.",
      icon: "message-circle",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Predictive Analytics",
      description: "We leverage AI-driven predictive analytics to uncover trends, optimize decision-making, and enhance business performance with data-driven insights.",
      icon: "bar-chart-2",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "AI Consulting & Custom AI Solutions",
      description: "We provide AI strategy consulting for businesses, develop custom AI models, and integrate AI-powered APIs to enhance operations and efficiency.",
      icon: "brain",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Data Integration",
      description: "We streamline data integration with AI, connecting multiple sources seamlessly to improve data accuracy, accessibility, and real-time decision-making.",
      icon: "database",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      title: "AI Search Solutions",
      description: "Enhanced search capabilities powered by natural language processing",
      icon: "search",
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Process Automation",
      description: "We develop AI-powered automation solutions to optimize workflows, reduce manual tasks, and increase operational efficiency across your business.",
      icon: "git-branch",
      color: "from-green-500 to-green-700",
    },
  ]

  // Industries data
  const industries = [
    {
      title: "Small Businesses",
      description:
        "Affordable AI solutions that level the playing field, helping small businesses compete with larger enterprises through automation and data insights.",
      icon: "building-2",
      color: "from-blue-500 to-blue-700",
      benefits: [
        "Customer segmentation for targeted marketing",
        "Automated customer service solutions",
        "Predictive inventory management",
      ],
    },
    {
      title: "E-commerce",
      description:
        "Personalized shopping experiences and intelligent inventory management to boost sales and streamline operations.",
      icon: "shopping-bag",
      color: "from-purple-500 to-purple-700",
      benefits: [
        "Personalized product recommendations",
        "Demand forecasting and inventory optimization",
        "Automated customer support chatbots",
      ],
    },
    {
      title: "Hospitality",
      description:
        "Enhance guest experiences and optimize operations with AI-powered solutions tailored for hotels, restaurants, and tourism.",
      icon: "home",
      color: "from-teal-500 to-teal-700",
      benefits: [
        "Personalized guest experiences",
        "Dynamic pricing optimization",
        "Predictive maintenance for facilities",
      ],
    },
    {
      title: "Healthcare",
      description:
        "Improve patient care and operational efficiency with AI solutions designed for medical practices and healthcare organizations.",
      icon: "activity",
      color: "from-red-500 to-red-700",
      benefits: [
        "Patient risk assessment models",
        "Administrative process automation",
        "Medical image analysis assistance",
      ],
    },

    {
      title: "Automotive & Manufacturing",
      description:
        "Optimize operations and enhance productivity in the automotive and manufacturing industries with AI-driven solutions focused on maintenance, quality control, and supply chain efficiency..",
      icon: "automotive",
      color: "from-green-500 to-green-700",
      benefits: [
        "Predictive maintenance for machinery",
        "AI-driven quality control",
        "Process automation & supply chain optimization",
      ],
    },
    {
      title: "Education",
      description:
        "Transform learning experiences and administrative processes with AI tools designed for educational institutions.",
      icon: "graduation-cap",
      color: "from-orange-500 to-orange-700",
      benefits: [
        "Personalized learning pathways",
        "Automated grading and feedback",
        "Student engagement and retention analytics",
      ],
    },
  ]

  // Benefits data
  const benefits = [
    {
      icon: "zap",
      title: "Increased Productivity",
      description: "Automate routine tasks and free up your team to focus on strategic initiatives.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "dollar-sign",
      title: "Cost Efficiency",
      description: "Reduce operational costs through intelligent automation and process optimization.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "clock",
      title: "24/7 Availability",
      description: "AI systems work around the clock, ensuring constant service availability.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: "target",
      title: "Enhanced Accuracy",
      description: "Minimize human error and increase the precision of your business processes.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: "bar-chart-2",
      title: "Data-Driven Insights",
      description: "Extract valuable insights from your data to make informed business decisions.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "refresh-cw",
      title: "Scalable Solutions",
      description: "Our AI solutions grow with your business, adapting to your evolving needs.",
      color: "from-amber-500 to-amber-600",
    },
  ]
  // landmark:
//   '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>',
// 
//   // Icon mapping
  const iconMap = {
    "message-circle":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    "bar-chart-2":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>',
    brain:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>',
    database:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    search:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    "git-branch":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>',
    "building-2":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>',
    "shopping-bag":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    activity:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    automotive:
  '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11V6c0-1.104-.896-2-2-2H9c-1.104 0-2 .896-2 2v5H4v2h1v6c0 .553.447 1 1 1h2v1h6v-1h2c.553 0 1-.447 1-1v-6h1v-2h-3zM9 6h6v5H9V6z"></path></svg>',
  "graduation-cap":
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', 
  zap: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    "dollar-sign":

      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    clock:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    target:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    "refresh-cw":
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7l3-3"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7l-3 3"></path></svg>',
  }

  // Populate services grid
  const servicesGrid = document.querySelector(".services-grid")
  if (servicesGrid) {
    services.forEach((service, index) => {
      const card = document.createElement("div")
      card.className =
        "bg-gray-900 border-gray-800 rounded-lg overflow-hidden transition-all duration-700 transform opacity-0 translate-y-10 service-card"
      card.style.transitionDelay = `${index * 100}ms`

      card.innerHTML = `
        <div class="p-6 h-full group relative">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"></div>
          
          <div class="relative z-10">
            <div class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} transform group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
              ${iconMap[service.icon]}
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
              ${service.title}
            </h3>
            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">${service.description}</p>

            <div class="mt-4 text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
            
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                // <line x1="5" y1="12" x2="19" y2="12"></line>
                // <polyline points="12 5 19 12 12 19"></polyline>
              // </svg>
            </div>
          </div>
        </div>
      `

      servicesGrid.appendChild(card)
    })

    // Animate services on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".service-card")
            cards.forEach((card) => {
              card.classList.remove("opacity-0", "translate-y-10")
              card.classList.add("opacity-100", "translate-y-0")
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(servicesGrid)
  }

  // Populate industries grid
  const industriesGrid = document.querySelector(".industries-grid")
  if (industriesGrid) {
    industries.forEach((industry, index) => {
      const card = document.createElement("div")
      card.className =
        "bg-gray-900 border-gray-800 rounded-lg overflow-hidden transition-all duration-700 transform opacity-0 translate-y-10 industry-card"
      card.style.transitionDelay = `${index * 100}ms`

      card.innerHTML = `
        <div class="p-6 h-full relative industry-item" data-index="${index}">
          <div class="absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 transition-opacity duration-300 rounded-lg industry-bg"></div>
          
          <div class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"></div>

          <div class="relative z-10">
            <div class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${industry.color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
              ${iconMap[industry.icon]}
            </div>

            <h3 class="text-xl font-semibold mb-2 text-white">${industry.title}</h3>

            <p class="text-gray-400 mb-4">${industry.description}</p>

            <div class="overflow-hidden transition-all duration-300 max-h-0 opacity-0 benefits-container">
              <h4 class="font-medium text-blue-400 mb-2">Key Benefits:</h4>
              <ul class="space-y-1">
                ${industry.benefits
                  .map(
                    (benefit) => `
                  <li class="text-gray-400 flex items-start">
                    <span class="text-blue-400 mr-2">•</span>
                    ${benefit}
                  </li>
                `,
                  )
                  .join("")}
              </ul>
            </div>

            <button class="mt-4 text-blue-400 font-medium flex items-center learn-more-btn">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `

      industriesGrid.appendChild(card)
    })

    // Replace the hover effects with click events for industry cards
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn")
    learnMoreButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault()

        // Find the parent industry item
        const industryItem = button.closest(".industry-item")
        const bg = industryItem.querySelector(".industry-bg")
        const benefits = industryItem.querySelector(".benefits-container")

        // Toggle the expanded state
        const isExpanded = benefits.classList.contains("opacity-100")

        if (isExpanded) {
          // Collapse
          bg.classList.remove("opacity-20")
          benefits.classList.add("max-h-0", "opacity-0")
          benefits.classList.remove("max-h-[200px]", "opacity-100")
          button.style.display = "flex" // Show the learn more button
        } else {
          // Expand
          bg.classList.add("opacity-20")
          benefits.classList.remove("max-h-0", "opacity-0")
          benefits.classList.add("max-h-[200px]", "opacity-100")
          button.style.display = "none" // Hide the learn more button
        }
      })
    })

    // Remove the old mouseenter/mouseleave event listeners
    // (Delete or comment out the old event listeners for industry items)
    /*
    industryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const index = item.dataset.index;
        const bg = item.querySelector('.industry-bg');
        const benefits = item.querySelector('.benefits-container');
        
        bg.classList.add('opacity-20');
        benefits.classList.remove('max-h-0', 'opacity-0');
        benefits.classList.add('max-h-[200px]', 'opacity-100');
      });
      
      item.addEventListener('mouseleave', () => {
        const bg = item.querySelector('.industry-bg');
        const benefits = item.querySelector('.benefits-container');
        
        bg.classList.remove('opacity-20');
        benefits.classList.add('max-h-0', 'opacity-0');
        benefits.classList.remove('max-h-[200px]', 'opacity-100');
      });
    });
    */

    // Animate industries on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".industry-card")
            cards.forEach((card) => {
              card.classList.remove("opacity-0", "translate-y-10")
              card.classList.add("opacity-100", "translate-y-0")
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(industriesGrid)
  }

  // Populate benefits grid
  const benefitsGrid = document.querySelector(".benefits-grid")
  if (benefitsGrid) {
    benefits.forEach((benefit, index) => {
      const card = document.createElement("div")
      card.className =
        "bg-gray-900 border-gray-800 rounded-lg overflow-hidden transition-all duration-700 transform opacity-0 translate-y-10 benefit-card group"
      card.style.transitionDelay = `${index * 100}ms`

      card.innerHTML = `
        <div class="p-6 h-full relative">
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl"></div>

          <div class="relative z-10">
            <div class="w-14 h-14 rounded-full mb-5 flex items-center justify-center bg-gradient-to-br ${benefit.color} transform group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
              ${iconMap[benefit.icon]}
            </div>

            <h3 class="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center">
              ${benefit.title}
            </h3>

            <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">${benefit.description}</p>
          </div>
        </div>
      `

      benefitsGrid.appendChild(card)
    })

    // Animate benefits on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".benefit-card")
            cards.forEach((card) => {
              card.classList.remove("opacity-0", "translate-y-10")
              card.classList.add("opacity-100", "translate-y-0")
            })

            // Also animate the CTA
            const cta = document.querySelector(".why-choose-cta")
            if (cta) {
              setTimeout(() => {
                cta.classList.remove("translate-y-10", "opacity-0")
                cta.classList.add("translate-y-0", "opacity-100")
              }, 600)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(benefitsGrid)
  }

  // Animate CTA section
  const ctaSection = document.getElementById("cta")
  if (ctaSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctaSection.classList.remove("opacity-0")
            ctaSection.classList.add("opacity-100")
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(ctaSection)
  }

  // Scroll to section function
  window.scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Account for navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })

      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden")
      }
    }
  }
})

