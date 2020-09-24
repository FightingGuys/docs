module.exports = {
    title: '开黑啦SDK',
    description: 'SDK',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '教程',
                ariaLabel: '教程',
                items: [
                    { text: 'c', link: '/tutorials/c/' },
                    { text: 'cpp', link: '/tutorials/cpp/' },
                    { text: 'java', link: '/tutorials/java/' },
                    { text: 'javascript', link: '/tutorials/javascript/' }
                ]
            },
            { 
                text: '文档',
                ariaLabel: '文档',
                items: [
                    { text: 'c', link: '/documents/c/' },
                    { text: 'cpp', link: '/documents/cpp/' },
                    { text: 'java', link: '/documents/java/' },
                    { text: 'javascript', link: '/documents/javascript/' }
                ]
            },
            { 
                text: '计划以及历史更新', 
                ariaLabel: '计划以及历史更新',
                items: [
                    { text: '计划看板', link: '/log/'},
                    { text: '历史更新', link: '/history/'}
                ]
            },
            { text: 'SDK开发者频道', link: '/channel/'},
            { text: '开黑啦官网', link: 'https://kaiheila.cn'}
        ],
        sidebar: {
            '/tutorials/c/': [
                '',
                'one',
            ],
            '/tutorials/cpp/': [
                ''
            ],
            '/tutorials/java/': [
                ''
            ],
            '/tutorials/javascript/': [
                ''
            ],
            '/documents/c/': [
                '',
                'one',
            ],
            '/documents/cpp/': [
                ''
            ],
            '/documents/java/': [
                ''
            ],
            '/documents/javascript/': [
                ''
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true
    }
}