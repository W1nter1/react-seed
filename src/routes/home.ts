const routes = [{
	path: '/page/index',
	component: () => import('@/pages/home'),
}, {
	path: '/',
	redirect: '/page/index'
},
]

export default routes