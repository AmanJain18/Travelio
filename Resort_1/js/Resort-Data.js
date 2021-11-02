const hotels = [{
        id: 0,
        name: "Bougainvilla",
        price: 19500,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "mumbai",
        image: "./villas/Mumbai/Bougainvilla/1.jpg",
        dates: "03-Nov-2021",
        star: "5",
        video: "./villas/Bangalore/Ananta by Vista Rooms/Ananta.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4312.685700718783!2d72.78758164303244!3d19.156015861146514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b5c9628dc095%3A0xd34d121a1965092e!2sThe%20Retreat%20Hotel%20and%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1635839185025!5m2!1sen!2sin",
        images: [
            "./villas/Mumbai/Bougainvilla/2.jpg",
            "./villas/Mumbai/Bougainvilla/3.jpg",
            "./villas/Mumbai/Bougainvilla/4.jpg",
        ],
    },
    {
        id: 1,
        name: "Countryside Villa",
        price: 22090,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "mumbai",
        image: "./villas/Mumbai/Countryside Villa/1.jpg",
        dates: "03-Nov-2021",
        star: "4",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.6191907917346!2d72.87750720977782!3d19.075980663472514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c0d49670c7%3A0x21f13739a5c2bc76!2sSangrila%20Waters%20Park!5e1!3m2!1sen!2sus!4v1635839574521!5m2!1sen!2sus",
        images: [
            "./villas/Mumbai/Countryside Villa/2.png",
            "./villas/Mumbai/Countryside Villa/3.jpg",
            "./villas/Mumbai/Countryside Villa/4.jpg",
        ],
    },
    {
        id: 2,
        name: "Shubham Villa",
        price: 17860,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "mumbai",
        image: "./villas/Mumbai/Shubham Villa/1.jpg",
        dates: "03-Nov-2021",
        star: "4",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.2842306355188!2d72.7941472491475!3d19.145482862151358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b5e78c6b6f4f%3A0x1b8302e6e1dde34f!2sShubham%20villa!5e0!3m2!1sen!2sus!4v1635840188193!5m2!1sen!2sus",
        images: [
            "./villas/Mumbai/Shubham Villa/2.jpg",
            "./villas/Mumbai/Shubham Villa/3.jpg",
            "./villas/Mumbai/Shubham Villa/4.jpg",
        ],
    },
    {
        id: 3,
        name: "Villa 1959",
        price: 16000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "mumbai",
        image: "./villas/Mumbai/Villa 1959/1.jpg",
        dates: "03-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d470.8823016886445!2d72.77997197509512!3d19.23628584383925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b34af5160d85%3A0xb76503f15cf0490c!2sVilla%20Holiday%20homes!5e0!3m2!1sen!2sus!4v1635840336336!5m2!1sen!2sus",
        images: [
            "./villas/Mumbai/Villa 1959/2.jpg",
            "./villas/Mumbai/Villa 1959/3.jpg",
            "./villas/Mumbai/Villa 1959/5.jpg",
        ],
    },
    {
        id: 4,
        name: "Cove Cottage",
        price: 18650,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "lonavala",
        image: "./villas/Lonavala/Cove Cottage/1.jpg",
        dates: "06-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15112.459946137102!2d73.3951214!3d18.7484002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5f93730de7520cc8!2sCove%20Cottage%20by%20Vista%20Rooms!5e0!3m2!1sen!2sin!4v1635841626049!5m2!1sen!2sin",
        images: [
            "./villas/Lonavala/Cove Cottage/2.jpg",
            "./villas/Lonavala/Cove Cottage/3.jpg",
            "./villas/Lonavala/Cove Cottage/4.jpg",
        ],
    },
    {
        id: 5,
        name: "El House",
        price: 22600,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "lonavala",
        image: "./villas/Lonavala/El House/1.jpg",
        dates: "06-Nov-2021",
        star: "4",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.630702459235!2d73.3816725!3d18.7799767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x154510ea6fb7c749!2sEl%20House%20Vista%20Rooms!5e0!3m2!1sen!2sin!4v1635841493123!5m2!1sen!2sin",
        images: [
            "./villas/Lonavala/El House/2.jpg",
            "./villas/Lonavala/El House/3.jpg",
            "./villas/Lonavala/El House/4.jpg",
        ],
    },
    {
        id: 6,
        name: "Greenwoods Seven",
        price: 19700,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "lonavala",
        image: "./villas/Lonavala/Greenwoods Seven/1.jpg",
        dates: "06-Nov-2021",
        star: "5",
        video: "./villas/Lonavala/Greenwoods Seven/Greenwoods Seven.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.5039520619322!2d73.38928095840437!3d18.752830908429555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8013cb31d91b3%3A0x58c5d5ef4920e9c6!2sGreen%20Woods!5e0!3m2!1sen!2sus!4v1635841298936!5m2!1sen!2sus",
        images: [
            "./villas/Lonavala/Greenwoods Seven/2.jpg",
            "./villas/Lonavala/Greenwoods Seven/3.jpg",
            "./villas/Lonavala/Greenwoods Seven/4.jpg",
        ],
    },
    {
        id: 7,
        name: "Villa 41 by Vista",
        price: 52000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "lonavala",
        image: "./villas/Lonavala/Villa 41/1.jpg",
        dates: "06-Nov-2021",
        star: "5",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482814.4577019325!2d72.83776504201114!3d19.02025260746029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be801ad5623127b%3A0xa51c56e08fdcf3ea!2sVilla%2041%2C%20Khandala!5e0!3m2!1sen!2sin!4v1635842016779!5m2!1sen!2sin",
        images: [
            "./villas/Lonavala/Villa 41/2.jpg",
            "./villas/Lonavala/Villa 41/3.jpg",
            "./villas/Lonavala/Villa 41/4.jpg",
        ],
    },
    {
        id: 8,
        name: "Windchimes",
        price: 26000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "lonavala",
        image: "./villas/Lonavala/Windchimes/1.jpg",
        dates: "06-Nov-2021",
        star: "4",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.22120296884873!2d73.38540077891284!3d18.7638246394025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be80108e024ff4b%3A0xdc4e93700bdff97f!2sWindchimes%20by%20Vista%20Rooms!5e0!3m2!1sen!2sus!4v1635842531058!5m2!1sen!2sus",
        images: [
            "./villas/Lonavala/Windchimes/2.jpg",
            "./villas/Lonavala/Windchimes/3.jpg",
            "./villas/Lonavala/Windchimes/4.jpg",
        ],
    },
    {
        id: 9,
        name: "Bella Cuena",
        price: 26000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "goa",
        image: "./villas/Goa/Bella Cuena/1.jpg",
        dates: "07-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d805.7100545352465!2d73.78212117776779!3d15.570953678076448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfebda2a2992af%3A0xb4c702b601e4fd28!2sAcasa%20Parra%20Villas%20by%20Vista%20Rooms!5e1!3m2!1sen!2sus!4v1635843112965!5m2!1sen!2sus",
        images: [
            "./villas/Goa/Bella Cuena/2.jpg",
            "./villas/Goa/Bella Cuena/3.jpg",
            "./villas/Goa/Bella Cuena/4.jpg",
        ]
    },
    {
        id: 10,
        name: "Bonita Vivenda, Private Villa",
        price: 19000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "goa",
        image: "./villas/Goa/Bonita Vivenda, Private Villa/1.jpg",
        dates: "07-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15375.533487605631!2d73.7966061!3d15.5443817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe8bb76ce855ea1e9!2sBonita%20Vivenda!5e0!3m2!1sen!2sin!4v1635843410185!5m2!1sen!2sin",
        images: [
            "./villas/Goa/Bonita Vivenda, Private Villa/2.jpg",
            "./villas/Goa/Bonita Vivenda, Private Villa/3.jpg",
            "./villas/Goa/Bonita Vivenda, Private Villa/4.jpg",
        ]
    },
    {
        id: 11,
        name: "Casa Simoes",
        price: 22000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "goa",
        image: "./villas/Goa/Casa Simoes/1.jpg",
        dates: "07-Nov-2021",
        star: "4",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15376.749705111712!2d73.7610839!3d15.52808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa7d4e5cfff7c0f14!2sRockheart%20Goa!5e0!3m2!1sen!2sin!4v1635843818059!5m2!1sen!2sin",
        images: [
            "./villas/Goa/Casa Simoes/2.jpg",
            "./villas/Goa/Casa Simoes/3.jpg",
            "./villas/Goa/Casa Simoes/5.png",
        ]
    },
    {
        id: 12,
        name: "Niraamaya Private Residences Benaulim",
        price: 34600,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "goa",
        image: "./villas/Goa/Niraamaya Private Residences Benaulim/1.jpg",
        dates: "07-Nov-2021",
        star: "5",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15396.536827053143!2d73.9195403!3d15.2604753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa18054aae2050fa3!2sNiraamaya%20Private%20Residences%2C%20Goa!5e0!3m2!1sen!2sin!4v1635843884394!5m2!1sen!2sin",
        images: [
            "./villas/Goa/Niraamaya Private Residences Benaulim/2.jpg",
            "./villas/Goa/Niraamaya Private Residences Benaulim/3.jpg",
            "./villas/Goa/Niraamaya Private Residences Benaulim/4.jpg",
        ]
    },
    {
        id: 13,
        name: "Orabella Villas and suites",
        price: 15000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "goa",
        image: "./villas/Goa/Orabella Villas and suites/1.jpg",
        dates: "07-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15375.712495159218!2d73.757217!3d15.5419834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2077e2c65079016!2sOrabella%20Viila%20%26%20Suites!5e0!3m2!1sen!2sin!4v1635843947104!5m2!1sen!2sin",
        images: [
            "./villas/Goa/Orabella Villas and suites/2.jpg",
            "./villas/Goa/Orabella Villas and suites/3.jpg",
            "./villas/Goa/Orabella Villas and suites/4.jpg",
        ]
    },
    {
        id: 14,
        name: "Ananta by Vista Rooms",
        price: 25000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "bangalore",
        image: "./villas/Bangalore/Ananta by Vista Rooms/1.jpg",
        dates: "07-Nov-2021",
        star: "4",
        video: "./villas/Bangalore/Ananta by Vista Rooms/Ananta.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.645073888008!2d77.4364421!3d12.8651413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5312252c55fe4cfb!2sAnanta%20by%20Vista%20Rooms!5e0!3m2!1sen!2sin!4v1635844333970!5m2!1sen!2sin",
        images: [
            "./villas/Bangalore/Ananta by Vista Rooms/2.jpg",
            "./villas/Bangalore/Ananta by Vista Rooms/3.jpg",
            "./villas/Bangalore/Ananta by Vista Rooms/4.jpg",
        ]
    },
    {
        id: 15,
        name: "Casablanca",
        price: 38000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "bangalore",
        image: "./villas/Bangalore/Casablanca/1.jpg",
        dates: "07-Nov-2021",
        star: "5",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4199.226457199907!2d77.56989409722041!3d12.974573665027481!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b160103ccd%3A0xebe9afdd9fe6d2b2!2sMajestic%20KSRTC%20BUS%20Terminal%202A!5e0!3m2!1sen!2sus!4v1635844641409!5m2!1sen!2sus",
        images: [
            "./villas/Bangalore/Casablanca/2.jpg",
            "./villas/Bangalore/Casablanca/3.jpg",
            "./villas/Bangalore/Casablanca/4.png",
        ]
    },
    {
        id: 16,
        name: "Captains Villa by Vista Rooms",
        price: 16000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "bangalore",
        image: "./villas/Bangalore/Captains Villa by Vista Rooms/1.jpg",
        dates: "07-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15537.374275004706!2d77.6433076!3d13.2037334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5cd90540b5470231!2sCaptains%20Villa%20by%20Vista%20Rooms!5e0!3m2!1sen!2sin!4v1635844871002!5m2!1sen!2sin",
        images: [
            "./villas/Bangalore/Captains Villa by Vista Rooms/2.jpg",
            "./villas/Bangalore/Captains Villa by Vista Rooms/3.jpg",
            "./villas/Bangalore/Captains Villa by Vista Rooms/4.jpg",
        ]
    },
    {
        id: 17,
        name: "Surabhi Villa",
        price: 14000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "bangalore",
        image: "./villas/Bangalore/Surabhi Villa/3.jpg",
        dates: "07-Nov-2021",
        star: "3",
        video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15538.5663478684!2d77.575341!3d13.1849838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x898b5d034e8a6e75!2sSurabhi%20Villa!5e0!3m2!1sen!2sin!4v1635845051002!5m2!1sen!2sin",
        images: [
            "./villas/Bangalore/Surabhi Villa/2.png",
            "./villas/Bangalore/Surabhi Villa/1.png",
            "./villas/Bangalore/Surabhi Villa/4.png",
        ]
    },
    {
        id: 18,
        name: "Tranquil Woods",
        price: 15000,
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
        location: "bangalore",
        image: "./villas/Bangalore/Tranquil Woods/1.png",
        dates: "07-Nov-2021",
        star: "3",
        video: "./villas/Bangalore/Tranquil Woods/Tranquil Woods.mp4",
        location_url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3087.763522415616!2d77.51959005770958!3d12.821418862263538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41fc2523fb69%3A0x10794f210a24e288!2sFolia%20plants!5e0!3m2!1sen!2sus!4v1635848361176!5m2!1sen!2sus",
        images: [
            "./villas/Bangalore/Tranquil Woods/2.png",
            "./villas/Bangalore/Tranquil Woods/3.png",
            "./villas/Bangalore/Tranquil Woods/4.png",
        ]
    },

];

const filters = {
    destination: "",
    availableOn: null,
    stars: []
};