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
        cohort: '2기',
        platform: 'WEB',
        slogan: '편지의 따뜻한 위로를 전하는 랜덤 익명 편지 서비스',
        description:
            '자신의 감정을 글로 적는 과정에서 해소가 이루어지기도 하고, 익명의 누군가와 편지를 주고 받으며 예상치 못한 사람에게 예상치 못한 답변을 받기도 하죠. 이:음에서 정성이 담긴 편지의 온기를 다시 느껴보세요.',
        serviceLink: 'https://ieum.vercel.app/',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-IEUM-Client, https://github.com/DEPthes/2nd-MVP-IEUM-Server',
        ],
        member: {
            'PM LEADER': '이여원',
            'CLIENT LEADER': '박지수',
            'SERVER LEADER': '백계환',
            PM: '조민경',
            CLIENT: ['나범수', '이가은', '장현준'],
            SERVER: '정지수',
            DESIGN: '김민주',
        },
    },
    {
        id: 'began',
        name: '비긴, 비건',
        thumbnail: '/image/project/background/began.png',
        logo: '/image/project/logo/beganL.png',
        cohort: '2기',
        platform: 'APP',
        slogan: '“비건=채식주의?NO! 비건은 그렇게 어렵지 않아”',
        description:
            '“비건=채식주의? NO! 비건은 그렇게 어렵지 않아” 커져가는 비건 시장 속에서 헤매는 “비기너”들과 함께 “비거너”가 되는 여정을 함께합니다. ',
        serviceLink: '',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-BeginVegan-Client, https://github.com/DEPthes/2nd-MVP-BeginVegan-Server',
        ],
        member: {
            'PM LEADER': '문규원',
            'CLIENT LEADER': '최정현',
            'SERVER LEADER': '강승우',
            PM: '김민서',
            CLIENT: '서윤지',
            SERVER: '박세진',
            DESIGN: '김세림',
        },
    },
    {
        id: 'water',
        name: '물은 답을 알고 있다',
        thumbnail: '/image/project/background/water.png',
        logo: '/image/project/logo/waterL.png',
        cohort: '2기',
        platform: 'APP',
        slogan: '나쁜 감정을 좋은 감정으로, 사라지는 일기 앱 서비스',
        description:
            '사용자들은 부정적인 감정을 ‘물’에 털어내고 상황에 맞는 답변을 통해 위로 또는 공감을 받을 수 있습니다. 일기를 작성하여 결정이 완성되면 결정에 담긴 답변을 열람함으로써, 지난 날을 되돌아볼 수 있습니다.',
        serviceLink: '',
        githubLink: [
            'https://github.com/DEPthes/2nd-MVP-Water-Client, https://github.com/DEPthes/2nd-MVP-Water-Server',
        ],
        member: {
            'PM LEADER': '이인서',
            'CLIENT LEADER': '김희윤',
            'SERVER LEADER': '김해찬',
            PM: '김하늘',
            CLIENT: '이보현',
            SERVER: '노은빈',
            DESIGN: '이다은',
        },
    },
];
