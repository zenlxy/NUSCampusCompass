
const images = {
    'LKCNHM': require('../../assets/images/LKCNHM.png'),
    'LKCNHM2': require('../../assets/images/LKCNHM2.png'),
    'LKCNHM3': require('../../assets/images/LKCNHM3.png'),
    'UCC': require('../../assets/images/UCC.png'),
    'UCC2': require('../../assets/images/UCC2.png'),
    'UCC3': require('../../assets/images/UCC3.png'),
    'Museum': require('../../assets/images/Museum.png'),
    'Museum2': require('../../assets/images/Museum2.png'),
    'YSTCM': require('../../assets/images/YSTCM.png'),
    'YSTCM2': require('../../assets/images/YSTCM2.png'),
    'YSTCM3': require('../../assets/images/YSTCM3.png'),
    'Flavours': require('../../assets/images/Flavours.png'),
    'Flavours2': require('../../assets/images/Flavours2.png'),
    'ERC': require('../../assets/images/ERC.png'),
    'ERC2': require('../../assets/images/ERC2.png'),
    'ERC3': require('../../assets/images/ERC3.png'),
    'Deck': require('../../assets/images/Deck.png'),
    'Deck2': require('../../assets/images/Deck2.png'),
    'Deck3': require('../../assets/images/Deck3.png'),
    'Frontier': require('../../assets/images/Frontier.png'),
    'Frontier2': require('../../assets/images/Frontier2.png'),
    'Frontier3': require('../../assets/images/Frontier3.png'),
    'Frontier4': require('../../assets/images/Frontier4.png'),
    'Techno': require('../../assets/images/Techno.png'),
    'Techno2': require('../../assets/images/Techno2.png'),
    'Techno3': require('../../assets/images/Techno3.png'),
    'CDE': require('../../assets/images/CDE.png'),
    'SoC': require('../../assets/images/SoC.png'),
    'Dentistry': require('../../assets/images/Dentistry.png'),
    'Science': require('../../assets/images/Science.png'),
    'FineFood': require('../../assets/images/FineFood.png'),
    'Medicine': require('../../assets/images/Medicine.png')
};

const places = [
    {
        placeId: 1,
        name: "Lee Kong Chian Natural History Museum",
        description: "The Lee Kong Chian Natural History Museum in Singapore showcases the incredible biodiversity of Southeast Asia, including stunning dinosaur skeletons and rare creatures like the giant squid. As part of the National University of Singapore, it serves as a dynamic hub for scientific research and education. The museum offers engaging, interactive exhibits and programs that inspire a deeper appreciation of the natural world. With its eco-friendly design and focus on conservation, it is a key destination for both learning and exploration.",
        history: "The Lee Kong Chian Natural History Museum is the oldest natural history museum in Southeast Asia, tracing its roots back to the founding of the Raffles Museum by Sir Thomas Stamford Raffles in 1823. Officially recognized as a separate entity in 1878, the museum’s collection has grown through various incarnations, including the Raffles Museum of Biodiversity Research. Established as an independent academic unit in 2014, the museum preserves Singapore's natural heritage and houses extensive historical collections.",
        funFacts: "1) The museum houses more than 560,000 specimens, including animals, plants, and fossils. / 2) The museum features three massive sauropod dinosaur skeletons named \"Prince,\" \"Apollonia,\" and \"Twinky.\" These 80% complete skeletons, found in Wyoming, USA, are among the most significant dinosaur finds and are displayed prominently in the museum.",
        address: "2 Conservatory Drive, National University of Singapore, Singapore 117377",
        coordinates: {
            latitude: 1.301667,
            longitude: 103.773611
        },
        type: "attraction",
        images: [
            { source: require('../../assets/images/LKCNHM.png') },
            { source: require('../../assets/images/LKCNHM2.png') },
            { source: require('../../assets/images/LKCNHM3.png') }
        ]
    },
    {
        placeId: 2,
        name: "University Cultural Centre",
        description: "As a high-grade, flexible performance venue nestled in the grounds of a premier university, the University Cultural Centre is a consistently sought-after venue. It operates year-round, hosting University events, arts programmes and external bookings.",
        history: "The University Cultural Centre (UCC) was established in Singapore in 1986 as a venue dedicated to promoting arts and culture within the National University of Singapore (NUS) campus. Initially conceived to host performances and events by student groups, it quickly expanded its role to become a hub for local and international arts programming. Over the years, UCC has grown to encompass a wide range of artistic disciplines, fostering creativity and cultural exchange through its diverse offerings of concerts, exhibitions, and theatrical productions.",
        funFacts: "1) Architectural Design: The University Cultural Centre's (UCC) distinctive architecture, designed by Kenzo Tange, incorporates elements that symbolize openness and creativity, reflecting its role as a cultural hub. / 2) Celebrity Performances: UCC has hosted performances by renowned artists and groups such as Yo-Yo Ma, the Singapore Symphony Orchestra, and international dance troupes, contributing to its reputation as a premier cultural venue in Singapore. / 3) Cultural Diversity: Beyond traditional arts, UCC regularly showcases a variety of cultural performances including traditional music, dance, and theater from different parts of the world, promoting cultural diversity and understanding among its audiences.",
        address: "50 Kent Ridge Crescent, National University of Singapore, Singapore 119279",
        coordinates: {
            latitude: 1.3018,
            longitude: 103.7718
        },
        type: "attraction",
        images: [
            { source: require('../../assets/images/UCC.png') },
            { source: require('../../assets/images/UCC2.png') },
            { source: require('../../assets/images/UCC3.png') }
        ]
    },
    {
        placeId: 3,
        name: "NUS Museum",
        description: "As a university museum, NUS Museum’s mission is to actively facilitate intellectual and cultural life within and beyond the University. With a distinct focus on Asia, the Museum contributes to and facilitates the production, reception, and preservation of knowledge through collections development and curatorial practice. The Museum is a cultural hub, developing partnerships within NUS, the culture and heritage industry, and the global knowledge community.",
        history: "The NUS Museum, originating as the University Art Museum in 1955 at the University of Malaya, predates Singapore's independence. It has evolved through various campus locations to establish a permanent home at the University Cultural Centre in 2000. Today, it houses over 8,000 artifacts and artworks, including significant collections like South & Southeast Asian art and the Straits Chinese Collection at the NUS Baba House, reflecting Singapore's cultural and historical evolution.",
        funFacts: "1) Virtual Exhibitions: The NUS Museum has developed virtual exhibitions and digital resources that allow global audiences to access its collections and learn about Southeast Asian art and culture remotely. / 2) Artist-in-Residence Program: The museum hosts an Artist-in-Residence program, inviting contemporary artists to create and exhibit new works that engage with its collections and themes, fostering creative dialogue between traditional and contemporary art practices.",
        address: "50 Kent Ridge Crescent, National University of Singapore, Singapore 119279",
        coordinates: {
            latitude: 1.3017,
            longitude: 103.7722
        },
        type: "attraction",
        images: [
            { source: require('../../assets/images/Museum.png') },
            { source: require('../../assets/images/Museum2.png') }
        ]
    },
    {
        placeId: 4,
        name: "Yong Siew Toh Conservatory of Music",
        description: "The Yong Siew Toh Conservatory of Music at NUS is Singapore's premier institution for music education, fostering a vibrant community of talented musicians and educators. It offers a wide range of performances, including classical and contemporary music concerts, often featuring students, faculty, and international artists. The conservatory is known for its state-of-the-art facilities and a dynamic, multicultural environment that enriches both the campus and the broader community.",
        history: "The Yong Siew Toh Conservatory of Music (YSTCM) at the National University of Singapore was founded in 2003 through a significant donation from the Yong Loo Lin Trust. Named after Yong Siew Toh, a passionate advocate for music, the conservatory was established to provide top-tier music education in Asia. It has since grown to become a leading institution in the region, renowned for its rigorous academic programs, world-class faculty, and vibrant cultural contributions.",
        funFacts: "1) Dinosaur Concert Hall: The Conservatory’s concert hall, often referred to as \"Orchestra Hall,\" is designed to resemble the shape of a dinosaur egg from an aerial view. This unique design enhances the hall's acoustics, making it an ideal venue for performances ranging from solo recitals to full orchestral concerts. / 2) Global Reach and Prestige: YSTCM is not only a cornerstone of Singapore’s music scene but also a recognized name on the global stage. It has partnerships with prestigious institutions worldwide, including the Peabody Institute at Johns Hopkins University, allowing students to participate in exchange programs and collaborative projects with renowned international musicians.",
        address: "3 Conservatory Drive, National University of Singapore, Singapore 117376",
        coordinates: {
            latitude: 1.3024,
            longitude: 103.7730
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/YSTCM.png') },
            { source: require('../../assets/images/YSTCM2.png') },
            { source: require('../../assets/images/YSTCM3.png') }
        ]
    },
    {
        placeId: 5,
        name: "Flavours @ UTown",
        description: "Flavours @ UTown is a popular dining venue located in University Town (UTown) at the National University of Singapore. It offers a diverse range of food options, including local Singaporean delights and international cuisines, catering to the diverse tastes of students, staff, and visitors. The spacious and vibrant setting, with indoor and outdoor seating, makes it an ideal spot for enjoying meals and socializing within the dynamic UTown community.",
        history: "Flavours @ UTown opened as part of the larger development of University Town (UTown) at the National University of Singapore, which was inaugurated in 2011. As one of the key dining venues in UTown, Flavours was established to provide a convenient and diverse dining experience that reflects the multicultural fabric of the NUS community. Over the years, it has become a popular gathering spot, known for its variety of food stalls and its role in fostering a lively campus atmosphere.",
        funFacts: "1) Eco-Friendly Initiatives: The dining venue is part of NUS’s commitment to sustainability. Many of the food vendors at Flavours participate in eco-friendly practices, such as minimizing plastic use, offering reusable dining ware, and supporting the campus's zero-waste initiatives. This aligns with NUS's broader sustainability goals and efforts to reduce the environmental footprint. / 2) Study and Social Space: Beyond just dining, Flavours @ UTown is a popular spot for students to study and hang out. Its spacious seating areas with comfortable arrangements make it an ideal place for group discussions, solo studying, or simply relaxing between classes. The venue often buzzes with the energy of students engaging in lively conversations or unwinding after a busy day.",
        address: "2 College Avenue West, University Town, National University of Singapore, Singapore 138607",
        coordinates: {
            latitude: 1.3046,
            longitude: 103.7727
        },
        type: "food",
        images: [
            { source: require('../../assets/images/Flavours.png') },
            { source: require('../../assets/images/Flavours2.png') }
        ]
    },
    {
        placeId: 6,
        name: "Education Resource Centre",
        description: "The Education Resource Centre (ERC) at University Town (UTown), NUS, is a state-of-the-art facility designed to support student learning and collaboration. It houses a variety of flexible study spaces, including quiet reading rooms, group discussion areas, and multimedia-equipped classrooms. With its modern architecture, the ERC provides an inspiring environment for both individual study and group projects, reflecting NUS's commitment to innovative and holistic education.",
        history: "The Education Resource Centre (ERC) at University Town (UTown), NUS, was officially opened in 2011 as part of the expansive development of UTown. The vision behind the ERC was to create a central hub for learning and collaboration, supporting NUS’s goal of fostering a dynamic and engaging educational environment. As one of the key components of UTown, the ERC was designed to integrate cutting-edge technology with versatile learning spaces, promoting a modern approach to education. Over the years, it has become a cornerstone of student life at NUS, serving as a vibrant space for academic and extracurricular activities.",
        funFacts: "1) 24-7 Access: The ERC is accessible 24-7, making it a go-to spot for students pulling late-night study sessions or working on group projects around the clock. This round-the-clock access is particularly valued during exam periods, providing a reliable space for study anytime. / 2) Green Building Design: The ERC is celebrated for its sustainable architecture, incorporating numerous green features such as energy-efficient lighting, natural ventilation, and abundant use of natural light. These eco-friendly designs not only reduce the building’s environmental impact but also create a pleasant and conducive atmosphere for learning. / 3) Interactive Learning Spaces: The ERC includes innovative “Learning Pods” equipped with advanced multimedia tools that support interactive and collaborative learning. These pods are popular for group discussions and presentations, enabling students to connect their devices and share content seamlessly on large screens, fostering a tech-savvy learning environment.",
        address: "8 College Ave West, Buona Vista, Singapore 138608",
        coordinates: {
            latitude: 1.30574,
            longitude: 103.77268,
        },
        type: "attraction",
        images: [
            { source: require('../../assets/images/ERC.png') },
            { source: require('../../assets/images/ERC2.png') },
            { source: require('../../assets/images/ERC3.png') }
        ]
    },
    {
        placeId: 7,
        name: "The Deck",
        description: "The Deck is a prominent dining facility located within the Faculty of Arts and Social Sciences (FASS) at the National University of Singapore (NUS). It features a variety of food stalls offering a diverse range of cuisines, including local Singaporean dishes and international options, catering to the tastes of students, staff, and visitors. With its open-air design and spacious seating areas, The Deck provides a vibrant and casual atmosphere ideal for meals, socializing, and taking breaks between classes.",
        history: "The Deck was  was established to provide a convenient and diverse dining experience for students, faculty, and visitors. Over the years, The Deck has evolved to accommodate a growing campus population and changing culinary trends. It has undergone several renovations to modernize its facilities, improve seating capacity, and enhance the variety of food offerings. Today, it remains a popular spot on campus, known for its lively atmosphere and wide selection of affordable and delicious food options.",
        funFacts: "1) Culinary Variety: The Deck is renowned for its diverse array of food stalls, offering everything from traditional Singaporean dishes like laksa and chicken rice to international cuisines such as Japanese, Western, and Indian. This variety caters to the multicultural student body and ensures there's something for everyone's taste. / 2) Student-Centric Design: The Deck's open-air and spacious design is specifically tailored to create a comfortable and relaxed dining environment. The seating areas are designed to accommodate large groups, making it a popular spot for students to gather, socialize, and even study together over meals. / 3) Green Initiatives: The Deck has embraced several eco-friendly practices, including waste reduction and recycling programs. Some food stalls participate in efforts to minimize plastic usage by offering reusable dining ware and encouraging students to bring their own containers, contributing to the university's broader sustainability goals.",
        address: "Computing Drive, The Deck, NUS, Singapore 117417",
        coordinates: {
            latitude: 1.2948,
            longitude: 103.77254,
        },
        type: "food",
        images: [
            { source: require('../../assets/images/Deck.png') },
            { source: require('../../assets/images/Deck2.png') },
            { source: require('../../assets/images/Deck3.png') }
        ]
    },
    {
        placeId: 8,
        name: "Frontier",
        description: "Frontier is a bustling dining hall located within the Faculty of Science at the National University of Singapore (NUS). It offers a wide range of food options, including local and international cuisines, making it a popular spot for students, faculty, and visitors to grab a meal. With its spacious seating areas and convenient location, Frontier serves as a vibrant hub for socializing, studying, and taking breaks between classes.",
        history: "Frontier at the National University of Singapore (NUS) is a key dining facility situated within the Faculty of Science. Established to meet the dining needs of the growing campus population, Frontier has been serving students, faculty, and staff with a diverse range of food options for many years. Over time, it has undergone various upgrades and renovations to improve its facilities, expand its seating capacity, and enhance the variety and quality of food offerings. Today, Frontier remains a popular and bustling hub, reflecting the dynamic and multicultural nature of the NUS community.",
        funFacts: "1) Themed Food Stalls: Frontier features themed food stalls that rotate periodically, offering students a chance to enjoy different culinary experiences without leaving campus. These stalls provide a variety of cuisines, from Asian to Western dishes, ensuring a fresh and exciting dining experience. / 2) Popular Study Spot: Besides being a dining hall, Frontier is also a favored spot for students to study and work on group projects. Its spacious seating area and convenient location within the Faculty of Science make it an ideal place for students to gather, making it a lively and productive environment throughout the day.",
        address: "12 Science Drive 2, Singapore 117549",
        coordinates: {
            latitude: 1.29658,
            longitude: 103.78040,
        },
        type: "food",
        images: [
            { source: require('../../assets/images/Frontier.png') },
            { source: require('../../assets/images/Frontier2.png') },
            { source: require('../../assets/images/Frontier3.png') },
            { source: require('../../assets/images/Frontier4.png') }
        ]
    },
    {
        placeId: 9,
        name: "Techno Edge Canteen",
        description: "Techno Edge is a popular canteen located in the School of Engineering at the National University of Singapore (NUS). Known for its wide range of food options, it caters to the diverse tastes of students, faculty, and staff with stalls offering local delights, international cuisines, and vegetarian choices. The canteen's modern design, spacious seating, and convenient location make it a bustling hub for dining and socializing within the engineering faculty.",
        history: "Techno Edge was established to serve the dining needs of the School of Engineering at NUS. Over the years, it has undergone several renovations and upgrades to enhance its facilities and expand its food offerings. These changes were aimed at accommodating the growing population of the engineering school and ensuring a comfortable and enjoyable dining experience. Today, Techno Edge is a well-loved canteen known for its variety, affordability, and vibrant atmosphere.",
        funFacts: "1) Robot Cleaners: Techno Edge has integrated technology into its operations by employing robot cleaners to maintain cleanliness in the dining area. These robots are a nod to the innovative spirit of the School of Engineering and add a futuristic touch to the canteen environment. / 2) Vegetarian-Friendly: Techno Edge is particularly known for its vegetarian food options, with several stalls dedicated to serving delicious and nutritious vegetarian meals. This makes it a popular spot for students and staff who prefer vegetarian diets or are looking for healthy eating choices. / 3) Lively Events: The canteen occasionally hosts events and food fairs, where special stalls are set up, and unique dishes are offered. These events are often accompanied by music and activities, creating a festive atmosphere that adds to the communal and lively spirit of Techno Edge.",
        address: "2 Engineering Drive 4, Singapore 117584",
        coordinates: {
            latitude: 1.297901,
            longitude: 103.771786,
        },
        type: "food",
        images: [
            { source: require('../../assets/images/Techno.png') },
            { source: require('../../assets/images/Techno2.png') },
            { source: require('../../assets/images/Techno3.png') }
        ]
    },
    {
        placeId: 10,
        name: "NUS College of Design and Engineering",
        description: "The NUS College of Design and Engineering (CDE) is a leading academic institution within NUS, combining the disciplines of design and engineering to foster innovation and interdisciplinary learning. The college offers a broad range of programs in fields such as architecture, industrial design, civil engineering, electrical engineering, and more. Its state-of-the-art facilities, world-class faculty, and collaborative environment provide students with the skills and knowledge to address complex global challenges.",
        history: "The NUS College of Design and Engineering was formed by merging the Faculty of Engineering and the School of Design and Environment. This strategic integration was aimed at fostering interdisciplinary education and research, aligning with global trends that increasingly blur the lines between design and engineering. / 2. Innovative Research Centers: CDE hosts numerous research centers that focus on cutting-edge areas such as smart cities, sustainable urban solutions, and advanced manufacturing technologies. These centers provide students and faculty with opportunities to engage in groundbreaking research and development projects.",
        funFacts: "1) Green Building Initiatives: The college is home to several green buildings that showcase sustainable architecture and engineering practices. These buildings serve as living laboratories where students can study and observe sustainable design principles in action.",
        address: "4 Architecture Drive, Singapore 117566",
        coordinates: {
            latitude: 1.30025,
            longitude: 103.77065,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/CDE.png') }
        ]
    },
    {
        placeId: 11,
        name: "NUS School of Computing",
        description: "The NUS School of Computing (SoC) is a leading institution for computer science and information systems education and research in Asia. Located within NUS, the SoC is renowned for its comprehensive curriculum, cutting-edge research, and vibrant student community. It offers a wide range of undergraduate and graduate programs, catering to students interested in areas such as artificial intelligence, data science, software engineering, cybersecurity, and interactive media.",
        history: "Established in 1998, the School of Computing was formed by merging the Department of Information Systems and Computer Science and the Department of Computer Science at NUS. Since its inception, the SoC has grown rapidly in reputation and scale, becoming a hub for innovation and technological advancement.",
        funFacts: "1) Hackathons and Competitions: The SoC hosts various hackathons and coding competitions throughout the year, providing students with opportunities to showcase their skills and creativity. These events often attract participation from students across the globe, fostering a competitive and collaborative spirit within the computing community. / 2) Research Excellence: The School of Computing is home to several research centers and institutes dedicated to advancing knowledge in areas such as artificial intelligence, cybersecurity, and computational biology. Its faculty and researchers are actively engaged in groundbreaking research projects, pushing the boundaries of technological innovation. / 3) Industry Partnerships: SoC maintains strong partnerships with industry leaders, facilitating internships, research collaborations, and career opportunities for its students. These partnerships ensure that SoC graduates are well-prepared to excel in the fast-paced and competitive tech industry.",
        address: "13 Computing Drive, Singapore 117417",
        coordinates: {
            latitude: 1.29319,
            longitude: 103.77442,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/SoC.png') }
        ]
    },
    {
        placeId: 12,
        name: "NUS Faculty of Dentistry",
        description: "The NUS Faculty of Dentistry is a leading dental institution in Asia, renowned for its excellence in dental education, research, and clinical practice. Situated in the heart of the NUS campus, the faculty plays a pivotal role in training future dental professionals and advancing dental healthcare. It offers a comprehensive range of undergraduate and postgraduate programs, preparing students with cutting-edge knowledge and practical skills in dentistry.",
        history: "Established to meet the growing demand for dental education and services in Singapore, the NUS Faculty of Dentistry has evolved into a center of excellence since its inception. Over the years, it has expanded its academic offerings and clinical facilities, attracting students and faculty members from diverse backgrounds. The faculty's journey has been marked by continuous innovation and adaptation to emerging trends in dental science and healthcare delivery.",
        funFacts: "1) Research Innovations: The faculty is at the forefront of dental research, pioneering breakthroughs in areas such as dental biomaterials, oral cancer prevention, and digital dentistry. / 2) Global Collaborations: It maintains strategic partnerships with international dental schools and organizations, enriching academic exchanges and collaborative research endeavors. / 3) Community Outreach: The faculty actively participates in community outreach programs, providing dental care to underserved populations and promoting oral health awareness through public education initiatives.",
        address: "9 Lower Kent Ridge Rd, Level 10, Singapore 119085",
        coordinates: {
            latitude: 1.297196,
            longitude: 103.77957,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/Dentistry.png') }
        ]
    },
    {
        placeId: 13,
        name: "NUS Faculty of Science",
        description: "The NUS Faculty of Science is one of the largest and most diverse faculties at NUS. It is renowned for its excellence in teaching and research across a broad spectrum of scientific disciplines. Offering a wide range of undergraduate and postgraduate programs, the faculty provides students with a rigorous and comprehensive education, fostering critical thinking and innovative problem-solving skills. The faculty is home to state-of-the-art laboratories, research centers, and facilities that support cutting-edge scientific inquiry and discovery.",
        history: "The NUS Faculty of Science has a rich history dating back to its establishment in 1929. Over the decades, it has grown and evolved, expanding its academic offerings and research capabilities. The faculty has played a pivotal role in the development of scientific education and research in Singapore, contributing significantly to the nation's progress in science and technology.",
        funFacts: "1) Nobel Laureate Connections: The faculty has had the privilege of hosting Nobel Laureates for lectures and collaborations, enriching the academic environment and inspiring students and researchers. / 2) Biodiversity Research: The faculty is a leader in biodiversity research, with initiatives aimed at understanding and preserving the rich natural heritage of Southeast Asia. / 3) Science Outreach: The faculty actively engages in science outreach programs, promoting science education and literacy among the public and inspiring the next generation of scientists.",
        address: "6 Science Drive 2, Singapore 117546",
        coordinates: {
            latitude: 1.29631,
            longitude: 103.78025,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/Science.png') }
        ]
    },
    {
        placeId: 14,
        name: "Fine Food",
        description: "Fine Food is a dining establishment located within NUS. It offers a refined culinary experience, featuring a diverse menu that includes both local and international dishes prepared with the finest ingredients. The dining venue's elegant setting, attentive service, and commitment to quality make it a popular choice for faculty, students, and visitors seeking a premium dining experience on campus.",
        history: "Fine Food was established to provide a high-quality dining option within the university. Since its inception, it has become known for its exceptional food and sophisticated ambiance. The dining venue has continually evolved, incorporating new culinary trends and expanding its menu to cater to a wide range of tastes and preferences.",
        funFacts: "1) Chef's Specials: Fine Food frequently features special dishes curated by renowned chefs, providing diners with a unique and memorable gastronomic experience. / 2) Sustainable Dining: Fine Food is committed to sustainability, using locally sourced and environmentally friendly ingredients wherever possible.",
        address: "National University Of Singapore, 1 Create Way, Town Plaza, 138602",
        coordinates: {
            latitude: 1.30401,
            longitude: 103.7736,
        },
        type: "food",
        images: [
            { source: require('../../assets/images/FineFood.png') }
        ]
    },
    {
        placeId: 15,
        name: "Yong Loo Lin School of Medicine",
        description: "The Yong Loo Lin School of Medicine is one of Asia's leading medical schools, located within NUS. It offers a comprehensive range of undergraduate and postgraduate programs in medicine, nursing, and other health sciences. The school's commitment to excellence in education, research, and clinical practice ensures that students receive a well-rounded and rigorous medical training. The modern facilities, experienced faculty, and strong clinical partnerships provide an enriching environment for aspiring healthcare professionals.",
        history: "Established in 1905, the Yong Loo Lin School of Medicine is the oldest medical school in Singapore and has a rich history of shaping the medical landscape in the region. Over the years, it has evolved to become a premier institution known for its innovative curriculum, cutting-edge research, and significant contributions to healthcare. The school was renamed in 2005 in honor of Mr. Yong Loo Lin, a prominent philanthropist whose generous donations have supported its development.",
        funFacts: "1) Simulation-Based Learning: The school boasts state-of-the-art simulation facilities where students can practice clinical skills in a realistic yet controlled environment, enhancing their hands-on experience. / 2) Global Health Initiatives: NUS Yong Loo Lin School of Medicine is actively involved in global health projects, providing students with opportunities to participate in international health missions and research. / 3) Nobel Laureate Connections: The school has hosted lectures and collaborations with Nobel laureates, offering students exposure to world-class medical research and discoveries.",
        address: "10 Medical Drive, Singapore 117597",
        coordinates: {
            latitude: 1.29575,
            longitude: 103.7815,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/Medicine.png') }
        ]
    },
    {
        placeId: 16,
        name: "NUS Business School",
        description: "NUS Business School is a prestigious business school within the National University of Singapore (NUS). Renowned for its rigorous academic programs, cutting-edge research, and strong industry connections, the school offers undergraduate, graduate, and executive education programmes. The school's holistic approach to business education, which combines theoretical knowledge with practical skills, prepares students to excel in the global business landscape. Its strategic location in Singapore, a major financial hub, further enhances the learning experience.",
        history: "Founded in 1965, NUS Business School has grown to become a leading business education institution in Asia. Over the decades, it has built a reputation for excellence in teaching, research, and thought leadership. The school's faculty comprises distinguished scholars and industry experts who contribute to its dynamic and forward-thinking academic environment. Through continuous innovation and adaptation to global business trends, NUS Business School remains at the forefront of business education.",
        funFacts: "1) Global Rankings: NUS Business School consistently ranks among the top business schools globally, recognized for its outstanding MBA and executive education programs. / 2) Entrepreneurial Ecosystem: The school fosters an entrepreneurial spirit among students through initiatives like the NUS Enterprise and the NUS Overseas Colleges program, providing opportunities for students to gain international startup experience. / 3) Distinguished Alumni: The school boasts a strong network of successful alumni who hold leadership positions in various industries worldwide, reflecting the quality and impact of its education.",
        address: "15 Kent Ridge Drive, Singapore 119245",
        coordinates: {
            latitude: 1.29264,
            longitude: 103.77417,
        },
        type: "faculty",
        images: [
            { source: require('../../assets/images/Business.png') }
        ]
    },
];

export { images, places };