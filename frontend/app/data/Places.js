
const images = {
    'LKCNHM': require('../../assets/images/LKCNHM.png'),
    'UCC': require('../../assets/images/UCC.png'),
    'Museum': require('../../assets/images/Museum.png'),
    'Museum2': require('../../assets/images/Museum2.png'),
    'YSTCM': require('../../assets/images/YSTCM.png'),
    'Flavours': require('../../assets/images/Flavours.png')
  };
  
const places = [
    {
        placeId: 1,
        name: "Lee Kong Chian Natural History Museum",
        description: "The Lee Kong Chian Natural History Museum in Singapore showcases the incredible biodiversity of Southeast Asia, including stunning dinosaur skeletons and rare creatures like the giant squid. As part of the National University of Singapore, it serves as a dynamic hub for scientific research and education. The museum offers engaging, interactive exhibits and programs that inspire a deeper appreciation of the natural world. With its eco-friendly design and focus on conservation, it is a key destination for both learning and exploration.",
        history: "The Lee Kong Chian Natural History Museum is the oldest natural history museum in Southeast Asia, tracing its roots back to the founding of the Raffles Museum by Sir Thomas Stamford Raffles in 1823. Officially recognized as a separate entity in 1878, the museum’s collection has grown through various incarnations, including the Raffles Museum of Biodiversity Research. Established as an independent academic unit in 2014, the museum preserves Singapore's natural heritage and houses extensive historical collections.",
        funFacts: "1) The museum houses more than 560,000 specimens, including animals, plants, and fossils. 2) The museum features three massive sauropod dinosaur skeletons named \"Prince,\" \"Apollonia,\" and \"Twinky.\" These 80% complete skeletons, found in Wyoming, USA, are among the most significant dinosaur finds and are displayed prominently in the museum.",
        address: "2 Conservatory Drive, National University of Singapore, Singapore 117377",
        coordinates: {
            latitude: 1.301667,
            longitude: 103.773611
        },
        images: [
            { source: require('../../assets/images/LKCNHM.png') }
        ]
    },
    {
        placeId: 2,
        name: "University Cultural Centre",
        description: "As a high-grade, flexible performance venue nestled in the grounds of a premier university, the University Cultural Centre is a consistently sought-after venue. It operates year-round, hosting University events, arts programmes and external bookings.",
        history: "The University Cultural Centre (UCC) was established in Singapore in 1986 as a venue dedicated to promoting arts and culture within the National University of Singapore (NUS) campus. Initially conceived to host performances and events by student groups, it quickly expanded its role to become a hub for local and international arts programming. Over the years, UCC has grown to encompass a wide range of artistic disciplines, fostering creativity and cultural exchange through its diverse offerings of concerts, exhibitions, and theatrical productions.",
        funFacts: "1) Architectural Design: The University Cultural Centre's (UCC) distinctive architecture, designed by Kenzo Tange, incorporates elements that symbolize openness and creativity, reflecting its role as a cultural hub. 2) Celebrity Performances: UCC has hosted performances by renowned artists and groups such as Yo-Yo Ma, the Singapore Symphony Orchestra, and international dance troupes, contributing to its reputation as a premier cultural venue in Singapore. 3) Cultural Diversity: Beyond traditional arts, UCC regularly showcases a variety of cultural performances including traditional music, dance, and theater from different parts of the world, promoting cultural diversity and understanding among its audiences.",
        address: "50 Kent Ridge Crescent, National University of Singapore, Singapore 119279",
        coordinates: {
            latitude: 1.3018,
            longitude: 103.7718
        },
        images: [
            { source: require('../../assets/images/UCC.png') }
        ]
    },
    {
        placeId: 3,
        name: "NUS Museum",
        description: "As a university museum, NUS Museum’s mission is to actively facilitate intellectual and cultural life within and beyond the University. With a distinct focus on Asia, the Museum contributes to and facilitates the production, reception, and preservation of knowledge through collections development and curatorial practice. The Museum is a cultural hub, developing partnerships within NUS, the culture and heritage industry, and the global knowledge community.",
        history: "The NUS Museum, originating as the University Art Museum in 1955 at the University of Malaya, predates Singapore's independence. It has evolved through various campus locations to establish a permanent home at the University Cultural Centre in 2000. Today, it houses over 8,000 artifacts and artworks, including significant collections like South & Southeast Asian art and the Straits Chinese Collection at the NUS Baba House, reflecting Singapore's cultural and historical evolution.",
        funFacts: "1) Virtual Exhibitions: The NUS Museum has developed virtual exhibitions and digital resources that allow global audiences to access its collections and learn about Southeast Asian art and culture remotely. 2) Artist-in-Residence Program: The museum hosts an Artist-in-Residence program, inviting contemporary artists to create and exhibit new works that engage with its collections and themes, fostering creative dialogue between traditional and contemporary art practices.",
        address: "50 Kent Ridge Crescent, National University of Singapore, Singapore 119279",
        coordinates:{
            latitude: 1.3017,
            longitude: 103.7722
        },
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
        funFacts: "1) Dinosaur Concert Hall: The Conservatory’s concert hall, often referred to as \"Orchestra Hall,\" is designed to resemble the shape of a dinosaur egg from an aerial view. This unique design enhances the hall's acoustics, making it an ideal venue for performances ranging from solo recitals to full orchestral concerts. 2) Global Reach and Prestige: YSTCM is not only a cornerstone of Singapore’s music scene but also a recognized name on the global stage. It has partnerships with prestigious institutions worldwide, including the Peabody Institute at Johns Hopkins University, allowing students to participate in exchange programs and collaborative projects with renowned international musicians.",
        address: "3 Conservatory Drive, National University of Singapore, Singapore 117376",
        coordinates: {
            latitude: 1.3024,
            longitude: 103.7730
        },
        images: [
            { source: require('../../assets/images/YSTCM.png') }
        ]
    },
    {
        placeId: 5,
        name: "Flavours @ UTown",
        description: "Flavours @ UTown is a popular dining venue located in University Town (UTown) at the National University of Singapore. It offers a diverse range of food options, including local Singaporean delights and international cuisines, catering to the diverse tastes of students, staff, and visitors. The spacious and vibrant setting, with indoor and outdoor seating, makes it an ideal spot for enjoying meals and socializing within the dynamic UTown community.",
        history: "Flavours @ UTown opened as part of the larger development of University Town (UTown) at the National University of Singapore, which was inaugurated in 2011. As one of the key dining venues in UTown, Flavours was established to provide a convenient and diverse dining experience that reflects the multicultural fabric of the NUS community. Over the years, it has become a popular gathering spot, known for its variety of food stalls and its role in fostering a lively campus atmosphere.",
        funFacts: "1) Eco-Friendly Initiatives: The dining venue is part of NUS’s commitment to sustainability. Many of the food vendors at Flavours participate in eco-friendly practices, such as minimizing plastic use, offering reusable dining ware, and supporting the campus's zero-waste initiatives. This aligns with NUS's broader sustainability goals and efforts to reduce the environmental footprint. 2) Study and Social Space: Beyond just dining, Flavours @ UTown is a popular spot for students to study and hang out. Its spacious seating areas with comfortable arrangements make it an ideal place for group discussions, solo studying, or simply relaxing between classes. The venue often buzzes with the energy of students engaging in lively conversations or unwinding after a busy day.",
        address: "2 College Avenue West, University Town, National University of Singapore, Singapore 138607",
        coordinates: {
            latitude: 1.3046,
            longitude: 103.7727
        },
        images: [
            { source: require('../../assets/images/Flavours.png') }
        ]
    }
];

export { images, places };