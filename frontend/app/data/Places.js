
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
        type: "attraction",
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
            latitude: 1.29514,
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
            latitude: 1.29651,
            longitude: 103.78031,
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
            latitude: 1.298167,
            longitude: 103.771786,
        },
        type: "food",
        images: [
            { source: require('../../assets/images/Techno.png') },
            { source: require('../../assets/images/Techno2.png') },
            { source: require('../../assets/images/Techno3.png') }
        ]
    },
];

export { images, places };