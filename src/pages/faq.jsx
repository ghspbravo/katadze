import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import './res/faq/faq.scss'
import faqBg from './res/faq/faq.svg'

import { useSpring, animated as a } from 'react-spring'
import useEvent from 'react-use/lib/useEvent'
import useTitle from 'react-use/lib/useTitle';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 28}px,0)`
const trans2 = (x, y) => `translate3d(${x / 24}px,${y / 40}px,0)`
const trans3 = (x, y) => `translate3d(${x / 35}px,${y / 23}px,0)`
const trans4 = (x, y) => `translate3d(${x / 18}px,${y / 22}px,0)`

export default function faq() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

	const mouseMoveHandler = useCallback(({ clientX: x, clientY: y }) => set({ xy: calc(x, y) }))
	useEvent('mousemove', mouseMoveHandler, window)

	useTitle('KATADZE | FAQ')
	return (
		<main>
			<div className="container">
				<div className="row no-gutters faq-header">
					<div className="col-12 col-lg-6">
						<div className="faq-header-inner pt-5">
							<h1 className="title_page">Ответы на все твои вопросы</h1>
							<p className="mb-3">Листай ниже! Все, о чем ты не знал и боялся спросить</p>
							<div className="row no-gutters">
								<div className="secondary mr-2">Не нашел ответа на свой вопрос?</div>
								<Link to='/contacts' className="button">Cпроси тут</Link>
							</div>
						</div>

						<div className="d-lg-none faq-header-figure_bg" style={{ backgroundImage: `url(${faqBg})` }}></div>
					</div>

					<div className="col-lg-6 d-none d-lg-block">
						<svg className="faq-header-figure" width="811" height="900" viewBox="0 0 811 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.38" d="M42.7934 273.591C42.7934 273.591 26.2889 52.664 202.425 86.6704C346.118 114.281 253.153 242.069 529.89 282.627C806.628 323.186 856.116 510.414 778.656 730.405C701.196 950.396 335.637 806.206 281.144 755.364C166.984 648.968 56.5591 445.829 42.7934 273.591Z" fill="url(#paint0_linear)" />
							<a.path style={{ transform: props.xy.interpolate(trans1) }} opacity="0.94" d="M199.217 659.983L195.874 585.168C195.57 578.477 200.737 572.395 207.423 571.786L311.055 562.359C334.152 560.23 352.387 541.982 354.514 518.868L369.405 358.898C371.533 335.176 356.337 313.583 333.24 307.805L93.1535 247.284C63.3706 239.68 34.4994 261.577 33.2838 292.294L25.0783 527.992C24.1666 556.58 47.8713 579.694 76.4386 577.565L136.916 573.611C141.475 573.307 146.033 575.436 148.465 579.694L199.217 659.983Z" fill="#FCC100" />
							<a.path style={{ transform: props.xy.interpolate(trans2) }} opacity="0.94" d="M270.028 193.757L511.938 158.783C539.594 154.829 564.514 176.422 564.514 204.402V399.347C564.514 424.893 543.848 445.574 518.32 445.574H476.381C469.999 445.574 464.225 448.615 460.578 453.481L417.423 510.961L413.472 457.739C412.56 447.703 404.355 439.796 394.326 439.491L289.174 435.842C266.077 434.929 246.931 417.29 244.803 394.177L230.824 243.938C228.392 219.304 245.715 197.407 270.028 193.757Z" fill="#004162" />
							<a.path style={{ transform: props.xy.interpolate(trans3) }} opacity="0.94" d="M614.659 658.462V708.643L668.754 644.777C672.401 640.215 678.175 637.782 683.95 637.782H724.977C751.113 637.782 772.083 616.189 770.867 590.034L763.573 396.609C762.662 368.63 736.829 347.949 709.174 353.119L477.9 395.393C453.588 399.955 437.177 422.46 440.52 447.094L461.489 601.895C464.832 625.313 485.194 642.648 508.899 641.735L593.689 638.694C605.238 638.086 614.659 647.21 614.659 658.462Z" fill="#F05D5E" />
							<a.path style={{ transform: props.xy.interpolate(trans4) }} opacity="0.94" d="M390.071 816L386.121 754.567C385.513 743.314 394.022 733.886 405.267 733.278L483.067 730.237C507.38 729.324 526.83 709.556 527.438 685.226L531.085 533.771C531.692 510.961 515.281 491.193 492.792 487.239L299.507 453.785C272.459 449.224 247.235 468.992 245.715 496.667L235.079 687.963C233.559 715.334 256.048 737.84 283.4 736.623L324.427 734.494C331.417 734.19 338.103 737.536 342.054 743.314L390.071 816Z" fill="#3EB5E7" />
							<a.path style={{ transform: props.xy.interpolate(trans1) }} d="M155.15 455.914L156.062 446.791C156.67 438.883 159.101 431.888 163.052 426.414C167.003 420.94 173.689 415.161 183.414 409.383C192.835 403.909 198.913 399.347 201.952 395.697C204.991 392.048 206.814 387.79 207.422 382.924C208.03 377.45 206.207 373.192 202.56 370.151C198.913 367.109 193.443 364.98 186.149 364.372C173.689 363.156 159.101 365.893 142.386 372.888L131.141 344.3C150.592 335.48 170.649 332.135 191.315 333.96C208.334 335.48 221.706 340.954 231.127 350.078C240.548 359.202 244.499 370.759 243.283 384.445C242.372 393.568 239.636 401.172 235.078 407.558C230.519 413.945 221.706 420.636 209.55 427.935C201.04 433.105 195.57 437.059 193.139 440.1C190.707 443.141 189.188 446.791 188.884 451.961L188.276 459.564L155.15 455.914ZM147.552 498.188C148.16 491.193 150.592 486.023 154.542 482.982C158.493 479.636 164.267 478.42 171.257 479.028C178.247 479.636 183.414 482.069 186.757 486.023C190.1 489.977 191.619 495.451 191.011 502.142C190.403 508.832 187.972 513.698 184.021 517.044C180.071 520.389 174.296 521.91 167.61 521.302C160.621 520.693 155.454 518.26 151.807 514.307C148.16 510.049 146.945 504.879 147.552 498.188Z" fill="#E5EFF3" />
							<a.path style={{ transform: props.xy.interpolate(trans2) }} d="M364.847 638.39L365.759 629.266C366.367 621.359 368.798 614.364 372.749 608.89C376.7 603.416 383.386 597.637 393.111 591.859C402.532 586.385 408.61 581.823 411.649 578.173C414.688 574.524 416.512 570.266 417.119 565.4C417.727 559.926 415.904 555.668 412.257 552.627C408.61 549.585 403.14 547.456 395.846 546.848C383.386 545.632 368.798 548.369 352.083 555.364L340.839 526.776C360.289 517.956 380.347 514.611 401.012 516.435C418.031 517.956 431.403 523.43 440.824 532.554C450.245 541.678 454.196 553.235 452.981 566.92C452.069 576.044 449.334 583.647 444.775 590.034C440.216 596.421 431.403 603.112 419.247 610.411C410.737 615.581 405.267 619.534 402.836 622.576C400.405 625.617 398.885 629.266 398.581 634.437L397.973 642.04L364.847 638.39ZM357.25 680.664C357.858 673.669 360.289 668.499 364.24 665.457C368.19 662.112 373.965 660.896 380.954 661.504C387.944 662.112 393.111 664.545 396.454 668.499C399.797 672.452 401.316 677.927 400.708 684.617C400.101 691.308 397.669 696.174 393.719 699.52C389.768 702.865 383.994 704.386 377.308 703.777C370.318 703.169 365.151 700.736 361.504 696.783C357.858 692.525 356.642 687.355 357.25 680.664Z" fill="#E5EFF3" />
							<a.path style={{ transform: props.xy.interpolate(trans3) }} d="M594.297 537.42L593.082 528.296C591.866 520.389 592.474 513.09 595.209 507.008C597.64 500.621 603.111 493.626 611.012 485.415C618.61 477.811 623.776 472.033 625.904 467.775C628.031 463.517 628.943 458.956 628.031 454.09C627.119 448.615 624.688 444.966 620.129 442.837C615.875 440.708 610.1 440.1 602.807 441.012C590.346 442.837 576.975 448.919 562.387 459.564L544.76 434.625C561.475 421.548 580.318 413.641 600.983 410.295C618.002 407.862 631.982 409.687 643.226 416.378C654.471 423.069 661.157 433.105 662.98 446.79C664.196 455.914 663.588 464.126 660.245 471.121C656.902 478.116 650.52 486.935 640.187 496.971C633.197 503.966 628.943 509.136 627.119 512.482C625.6 515.827 624.992 520.085 625.904 524.951L627.119 532.25L594.297 537.42ZM596.425 580.302C595.513 573.307 596.425 567.833 599.768 563.879C603.111 559.926 607.973 557.188 615.267 556.276C622.257 555.364 627.727 556.276 631.982 559.317C636.236 562.359 638.972 567.225 639.883 573.915C640.795 580.302 639.579 585.776 636.54 590.034C633.197 594.292 628.335 597.029 621.649 597.941C614.659 598.854 609.189 597.941 604.63 594.9C600.071 591.859 597.64 586.993 596.425 580.302Z" fill="#E5EFF3" />
							<a.path style={{ transform: props.xy.interpolate(trans4) }} d="M374.876 337.305L374.573 328.181C374.269 320.274 375.788 313.279 378.827 307.196C381.866 301.114 387.944 294.727 396.758 287.428C405.267 280.737 410.738 275.567 413.473 271.309C416.208 267.356 417.424 262.794 417.12 257.928C416.816 252.453 414.688 248.5 410.738 245.763C406.483 243.026 401.012 241.809 393.719 242.113C381.258 242.721 367.279 247.283 351.476 256.103L336.584 229.34C354.819 218.087 374.269 212.005 394.934 211.092C411.953 210.484 425.933 213.829 436.266 221.737C446.599 229.644 452.373 240.288 452.981 253.974C453.285 263.098 451.765 271.005 447.814 278C443.863 284.691 436.266 292.598 425.021 301.418C417.424 307.804 412.561 312.366 410.434 315.712C408.306 318.753 407.698 323.011 407.698 327.877L408.002 335.48L374.876 337.305ZM372.749 380.187C372.445 373.192 373.965 367.717 377.612 364.068C381.259 360.418 386.729 358.289 393.719 357.985C400.709 357.681 406.179 359.202 410.13 362.851C414.081 366.501 416.208 371.671 416.512 378.362C416.816 385.053 414.992 390.223 411.345 394.176C407.698 398.13 402.532 400.259 395.542 400.563C388.552 400.867 383.082 399.347 379.131 395.697C375.18 392.352 373.053 387.182 372.749 380.187Z" fill="#E5EFF3" />
							<defs>
								<linearGradient id="paint0_linear" x1="18.7351" y1="421.306" x2="819.409" y2="524.367" gradientUnits="userSpaceOnUse">
									<stop stopColor="#4D9DE0" />
									<stop offset="1" stopColor="#F2F2F2" />
								</linearGradient>
							</defs>
						</svg>

					</div>
				</div>

				<section className="sbox">
					<div className="col-lg-10 col-12 px-0">
						<h3 className="lead">KatadZe<span className="primary">.FRIENDS</span></h3>
						<div className="faq-question">
							<h4>Какие организации интересны вам в разрезе партнерства?</h4>
							<p>Нам интересны организации, которые могут быть интересны студентам: кафе, рестораны, бары, магазины модной одежды и аксессуаров для активной жизни, различные развлечения и обучения, услуги из категории красоты и ухода за собой и многое другое. Если вы считаете, что можете быть полезны студенческой аудитории – напишите нам.</p>
						</div>
	
						<div className="faq-question">
							<h4>Моя компания тоже туроператор. Как сотрудничать?</h4>
							<p>Прекрасно! Создадим коллаборацию туроператоров. Сделаем совместный тур. Поделимся опытом. <Link to='/contacts'>Напишите нам</Link> – мы обсудим варианты сотрудничества.</p>
						</div>
	
						<div className="faq-question">
							<h4>Моя организация не из Екатеринбурга, есть смысл сотрудничать?</h4>
							<p>Есть. Хотя бы потому что наш идейный вдохновитель – с Кавказа. А креативный менеджер – из Киргизии. А наши планы – охватить весь мир. Вместе с Вами</p>
						</div>
	
						<div className="faq-question">
							<h4>Я активировал скидку, но мне её не предоставили, что делать?</h4>
							<p>Видимо, в заведении партнера новый сотрудник и он ещё не узнал про наш сервис. Если вы отметили, что не получили скидку в раздле «Партнеры», то мы уже спешим связаться с Вами. Или <Link to='/contacts'>напишите нам</Link> напрямую, или позвоните на горячую линию по номеру <a href="tel:+79667090909">+ 7 (966) 709-09-09</a>.</p>
						</div>
	
						<div className="faq-question">
							<h4>Я приобрел подписку на год, но не могу/не хочу ей больше пользоваться, могу ли я вернуть средства?</h4>
							<p>Приобретенная подписка на любой срок не подлежит отмене или обмену. Надеемся, что у Вас ещё появится возможность использовать подписку и получить выгодные скидки у наших партнеров.</p>
						</div>
	
						<div className="faq-question">
							<h4>Я не студент, но очень хочу пользоваться скидками, что-то можно сделать?</h4>
							<p>На данный момент сервис работает только для аудитории обучающихся вузов и сузов. В будущем мы планируем создать скидочную систему для других категорий. Оставайтесь с нами и принимайте участие в наших бомбических выездах.</p>
						</div>
	
						<div className="faq-question">
							<h4>Я – аспирант, могу ли я получать скидки в KatadZe.FRIENDS?</h4>
							<p>Да, можете! Наш сервис распространяется на всех обучающихся вузов и сузов. Аспиранты попадают в эту категорию.</p>
						</div>

						<h3 className="lead">KatadZe<span className="primary">.EVENTS</span></h3>

						<div className="faq-question">
							<h4>Как стать участником события?</h4>
							<p>Для того, чтобы принять участие в любом из наших проектов достаточно <Link to='/register'>зарегистрироваться</Link> на нашем портале, выбрать интересное событие и оплатить участие в нем, кликнув по соответствующей кнопке.</p>
						</div>
						
						<div className="faq-question">
							<h4>Стать участником события может любой желающий?</h4>
							<p>Все наши события ориентированы на аудиторию от 18 до 35 лет. Но, если Вы старше – это не станет сложностью, и мы с удовольствием примем Вас в нашу компанию. А если Вы младше 18 лет, то придется подождать немного, чтобы стать участником наших событий.</p>
						</div>
						
						<div className="faq-question">
							<h4>Где узнать еще больше про отдельное мероприятие?</h4>
							<p>Специально для каждого проекта мы создаем отдельную группу в социальной сети в Вконтакте, где размещаем всю информацию: от расписания до фото-отчетов. Следите за нами на нашей <a href="https://vk.com/katadzzze" target="_blank" rel="noopener noreferrer">официальной страничке</a></p>
						</div>
						
						<div className="faq-question">
							<h4>Можно ли самому стать организатором события?</h4>
							<p>Можно и нужно! Специально для этого мы создаем сервис <b>Katadze Guide</b>, благодаря которому у каждого появится возможность организовать с нашей помощью свой Event или тур.</p>
						</div>
						
						<div className="faq-question">
							<h4>Как я могу получить подтверждение участия, если внесу оплату?</h4>
							<p>При оплате через сайт Вы получаете электронный чек об оплате, который является подтверждением оплаты и участия в событии. Для участия в крупных проектах (РКВ, KatadZe Camp, AFP), обязательным условием является заключение договора, который Вам предложат заключить наши администраторы.</p>
						</div>

					</div>
				</section>
			</div>

		</main>
	)
}