import React from 'react'
import './res/contacts/contacts.scss'

import contactsPath from './res/contacts/contacts.png'

export default function contacts() {
	return (
		<main>
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 pt-5">
						<h1 className="title_page">У тебя остался вопрос?</h1>
						
						<form>
							<div className="form-group">
								<label className="mr-1" htmlFor="contacts-question">Твой вопрос</label>
								<input id="contacts-question" type="text"/>
							</div>
							<div className="form-group">
								<div className="row no-gutters">
									<div className="col">
										<label className="mr-1" htmlFor="contacts-name">Имя</label>
										<input id="contacts-name" type="text"/>
									</div>
									<div className="col">
										<label className="mr-1" htmlFor="contacts-mail">Почта</label>
										<input id="contacts-mail" type="email"/>
									</div>
								</div>
							</div>
						</form>
					</div>

					<div className="col-md-6">
						<img id="contacts-header" src={contactsPath} alt=""/>
					</div>
				</div>
			</div>
		</main>
	)
}
