import { ProjectBlockProps } from './ProjectInterface';

export const projectContents: ProjectBlockProps[] = [
    {
        id: 'yetsul',
        name: '옛술의 전당',
        thumbnail: '/image/project/background/yetsul.png',
        logo: '/image/project/Logo/yetsulL.png',
        cohort: '1기',
        platform: 'WEB',
        slogan: '청춘을 위한 한 잔, 옛술의 전당에서 건배!',
        description:
            '옛술의 전당은 ‘우리의 자랑스러운 전통주를 알리기 위해’ 시작되었습니다. 자신에게 어울리는 전통주를 찾고 전통주의 매력을 한층 더 느끼며, 전통주를 즐길 수 있게 하는 것을 목표로 제작하였고, 우리의 옛술이 더 이상 ‘전통주’ 자체가 아닌 모두가 함께 즐길 수 있는 술로 거듭나도록 다양한 서비스를 제공하고 있습니다.',
        serviceLink: 'https://www.yetsul.com/',
        githubLink: [
            'https://github.com/DEPthes/1st-Yetsul-Web',
            'https://github.com/DEPthes/1st-Yetsul-Server',
        ],
        member: {
            'TEAM LEADER': '이보현',
            'PM LEADER': '이여원',
            'WEB LEADER': '강상원',
            'SERVER LEADER': '김해찬',
            PM: ['문규원', '박상민', '김보은'],
            WEB: ['김희윤', '이보현', '이가은'],
            SERVER: '김현빈',
            DESIGN: '최성경',
        },
    },
    {
        id: 'ieum',
        name: '이:음',
        thumbnail: '/image/project/background/ieum.png',
        logo: '/image/project/logo/ieumL.png',
        cohort: '2기 mvp',
        platform: 'WEB',
        slogan: '편지의 따뜻한 위로를 전하는 랜덤 익명 편지 서비스',
        description:
            '자신의 감정을 글로 적는 과정에서 해소가 이루어지기도 하고, 익명의 누군가와 편지를 주고 받으며 예상치 못한 사람에게 예상치 못한 답변을 받기도 하죠. 이:음에서 정성이 담긴 편지의 온기를 다시 느껴보세요.',
        serviceLink: 'https://ieum.depth-mju.co.kr/',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-IEUM-Client',
            'https://github.com/DEPthes/2nd-MVP-IEUM-Server',
        ],
        member: {
            'PM LEADER': '이여원',
            'CLIENT LEADER': '박지수',
            'SERVER LEADER': '백계환',
            'DESIGN LEADER': '김민주',
            PM: '조민경',
            CLIENT: ['나범수', '이가은', '장현준'],
            SERVER: '정지수',
        },
    },
    {
        id: 'began',
        name: '비긴, 비건',
        thumbnail: '/image/project/background/began.png',
        logo: '/image/project/logo/beganL.png',
        cohort: '2기 mvp',
        platform: 'APP',
        slogan: '“비건=채식주의?NO! 비건은 그렇게 어렵지 않아”',
        description:
            '“비건=채식주의? NO! 비건은 그렇게 어렵지 않아” 커져가는 비건 시장 속에서 헤매는 “비기너”들과 함께 “비거너”가 되는 여정을 함께합니다. ',
        serviceLink: '',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-BeginVegan-Client',
            'https://github.com/DEPthes/2nd-MVP-BeginVegan-Server',
        ],
        member: {
            'PM LEADER': '문규원',
            'CLIENT LEADER': '최정현',
            'SERVER LEADER': '강승우',
            'DESIGN LEADER': '김세림',
            PM: '김민서',
            CLIENT: '서윤지',
            SERVER: '박세진',
        },
    },
    {
        id: 'water',
        name: '물은 답을 알고 있다',
        thumbnail: '/image/project/background/water.png',
        logo: '/image/project/logo/waterL.png',
        cohort: '2기 mvp',
        platform: 'APP',
        slogan: '나쁜 감정을 좋은 감정으로, 사라지는 일기 앱 서비스',
        description:
            '사용자들은 부정적인 감정을 ‘물’에 털어내고 상황에 맞는 답변을 통해 위로 또는 공감을 받을 수 있습니다. 일기를 작성하여 결정이 완성되면 결정에 담긴 답변을 열람함으로써, 지난 날을 되돌아볼 수 있습니다.',
        serviceLink: '',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-Water-Client',
            'https://github.com/DEPthes/2nd-MVP-Water-Server',
        ],
        member: {
            'PM LEADER': '이인서',
            'CLIENT LEADER': '김희윤',
            'SERVER LEADER': '김해찬',
            'DESIGN LEADER': '이다은',
            PM: '전하늘',
            CLIENT: '이보현',
            SERVER: '노은빈',
        },
    },
    {
        id: 'money',
        name: '금융원정대',
        thumbnail: '/image/project/background/money.png',
        logo: '/image/project/logo/moneyLogo.png',
        cohort: '2기 main',
        platform: 'WEB',
        slogan: '당신의 위대한 여정이 시작된다!',
        description:
            '복잡한 금융 용어와 상품들 탓에 어려움을 느낀 적이 있나요? 상품이 너무 많아 금융 상품을 비교하는 서비스가 번거로웠던 경험이 있나요? 금융이 어려운 청년들을 위한, 수많은 금융 정보들을 누구나 쉽고 빠르게 볼 수 있는 서비스를 만들었어요. "금융원정대"와 함께라면, 여러분에게 맞는 금융 상품을 쉽게 찾을 수 있어요',
        serviceLink: 'https://www.finfellows.co.kr/',
        githubLink: [
            'https://github.com/FinFellows/web',
            'https://github.com/FinFellows/Server',
        ],
        member: {
            'PM LEADER': '박수성',
            'CLIENT LEADER': '박지수',
            'SERVER LEADER': '노은빈',
            'DESIGN LEADER': '김민주',
            PM: '백도현',
            CLIENT: ['이보현', '이가은', '장현준'],
            SERVER: ['박세진', '이재혁'],
            DESIGNER: '김태진',
        },
    },
    {
        id: 'exhibition',
        name: '전시로그',
        thumbnail: '/image/project/background/exhibition.png',
        logo: '/image/project/logo/exhibitionLogo.png',
        cohort: '2기 main',
        platform: 'APP',
        slogan: '전시를 기록하다 : 전시회 정보 플랫폼',
        description:
            '사용자가 전시회의 정보를 보다 쉽게 찾도록 도와주는 서비스로, 서비스를 통해 각 전시회의 세부 정보를 확인할 수 있어요. 사용자들이 별점과 감상평을 통해 자신의 생각과 경험을 나눌 수 있게 함으로써 풍부하고 만족스러운 전시회 경험을 쌓을 수 있도록 지원해요!',
        serviceLink:
            'https://play.google.com/store/apps/details?id=com.andletgo.jeonsilog&hl=ko',
        githubLink: [
            'https://github.com/AndLetgo/2nd-Main-JeonsiLog-Client',
            'https://github.com/AndLetgo/2nd-Main-JeonsiLog-Server',
        ],
        member: {
            'PM LEADER': '조민경',
            'CLIENT LEADER': '서윤지',
            'SERVER LEADER': '백계환',
            'DESIGN LEADER': '김세림',
            PM: '이인서',
            CLIENT: ['문장훈', '임준형'],
            SERVER: '강승우',
        },
    },
    {
        id: 'idea',
        name: '아이디어 캠퍼스',
        thumbnail: '/image/project/background/idea.png',
        logo: '/image/project/logo/ideaLogo.png',
        cohort: '2기 main',
        platform: 'WEB',
        slogan: '각 팀의 작품을 구경하고, 나만의 아이디어를 펼쳐보세요!',
        description:
            '대학생들은 뛰어난 아이디어와 개발 능력을 가지고 있지만 이를 널리 알리고 사용자를 모으는데 어려움을 겪는 경우가 많아요. 아이디어 캠퍼스는 그들의 노력을 더 가치있게 만들어주고, 사용자들에게 혁신적인 서비스와 아이디어를 소개함으로써 IT문화의 발전을 촉진시켜요.',
        serviceLink: 'https://ideacampus.vercel.app/',
        githubLink: [
            'https://github.com/IDEA-CAMPUS/IDEA-CAMPUS-Client-Main',
            'https://github.com/IDEA-CAMPUS/IDEA-CAMPUS-Server',
        ],
        member: {
            'PM LEADER': '허재석',
            'CLIENT LEADER': '나범수',
            'SERVER LEADER': '정지수',
            'DESIGN LEADER': '이다은',
            PM: '전하늘',
            CLIENT: ['박상민', '정상경'],
            SERVER: ['배수연', '이상남'],
            DESIGNER: '봉서연',
        },
    },
];
