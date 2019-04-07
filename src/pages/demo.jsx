import React from 'react'

export default function demo() {
	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2>Standart heading</h2>
						<h1>Heading 1</h1>
						<h2>Heading 2</h2>
						<h3>Heading 3</h3>
						<h4>Heading 4</h4>
						<h5>Heading 5</h5>
						<h6>Heading 6</h6>
					</div>
	
					<div className="col">
						<h2 className="lead">Lead heading</h2>
						<h1 className="lead">Heading 1</h1>
						<h2 className="lead">Heading 2</h2>
						<h3 className="lead">Heading 3</h3>
						<h4 className="lead">Heading 4</h4>
						<h5 className="lead">Heading 5</h5>
						<h6 className="lead">Heading 6</h6>
					</div>
				</div>
	
				<div>
					<a href="/"><span>Link with span</span></a>
				</div>
				<div>
					<a href="/" target="_blank"><span>link on external source</span></a>
				</div>
	
				<header>
					<nav>
						<ul>
							<li><a href="/">Element #1</a></li>
							<li><a href="/">Element #2</a></li>
							<li><a href="/">Element #3</a></li>
						</ul>
					</nav>
				</header>
	
				<h1>Content</h1>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <a href="/">link in content</a> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m.</p>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <a href="/"><span>link underlined in content</span></a> penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m.</p>
					<blockquote>
						<p>Some sort of famous witty quote marked up with a &lt;blockquote> and a child &lt;p> element.</p>
					</blockquote>
					<h3>ordered list</h3>
	
					<ol>
						<li>list item 1</li>
						<li>list item 1
		        <ol>
								<li>list item 2</li>
								<li>list item 2
		                <ol>
										<li>list item 3</li>
										<li>list item 3</li>
									</ol>
								</li>
								<li>list item 2</li>
								<li>list item 2</li>
							</ol>
						</li>
						<li>list item 1</li>
						<li>list item 1</li>
					</ol>
	
					<h3>unordered list</h3>
	
					<ul>
						<li>list item 1</li>
						<li>list item 1
		        <ul>
								<li>list item 2</li>
								<li>list item 2
		                <ul>
										<li>list item 3</li>
										<li>list item 3</li>
									</ul>
								</li>
								<li>list item 2</li>
								<li>list item 2</li>
							</ul>
						</li>
						<li>list item 1</li>
						<li>list item 1</li>
					</ul>
	
					<h3>description list</h3>
	
					<dl>
						<dt>Description name</dt>
						<dd>Description defaultValue</dd>
						<dt>Description name</dt>
						<dd>Description defaultValue</dd>
						<dd>Description defaultValue</dd>
						<dt>Description name</dt>
						<dt>Description name</dt>
						<dd>Description defaultValue</dd>
					</dl>
				</div>
	
				<address>Address: somewhere, world</address>
	
				<hr />
	
				<p>
					The <a href="/">a element</a> example<br />
					The <abbr>abbr element</abbr> and <abbr title="Заголовок">abbr element with title</abbr> examples<br />
					The <b>b element</b> example<br />
					The <strong>strong element</strong> example<br />
					The <em>em element</em> example<br />
					The <i>i element</i> example<br />
					The <cite>cite element</cite> example<br />
					The <code>code element</code> example<br />
					The <del>del element</del> example<br />
					The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples<br />
					The img element <img src="http://via.placeholder.com/50x50" alt="" /> example<br />
					The <ins>ins element</ins> example<br />
					The <kbd>kbd element</kbd> example<br />
					The <mark>mark element</mark> example<br />
					The <q>q element <q>inside</q> a q element</q> example<br />
					The <s>s element</s> example<br />
					The <samp>samp element</samp> example<br />
					The <small>small element</small> example<br />
					The <span>span element</span> example<br />
					The <sub>sub element</sub> example<br />
					The <sup>sup element</sup> example<br />
					The <u>u element</u> example<br />
					The <var>var element</var> example
					</p>
	
	
	
	
				<h3>figure</h3>
	
				<figure>
					<img src="http://via.placeholder.com/400x200" alt="" />
					<figcaption>Figcaption content</figcaption>
				</figure>
	
				<h1>Tables</h1>
	
				<table>
					<caption>Jimi Hendrix - albums</caption>
					<thead>
						<tr>
							<th>Album</th>
							<th>Year</th>
							<th>Price</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>Album</th>
							<th>Year</th>
							<th>Price</th>
						</tr>
					</tfoot>
					<tbody>
						<tr>
							<td>Are You Experienced</td>
							<td>1967</td>
							<td>$10.00</td>
						</tr>
						<tr>
							<td>Axis: Bold as Love</td>
							<td>1967</td>
							<td>$12.00</td>
						</tr>
						<tr>
							<td>Electric Ladyland</td>
							<td>1968</td>
							<td>$10.00</td>
						</tr>
						<tr>
							<td>Band of Gypsys</td>
							<td>1970</td>
							<td>$12.00</td>
						</tr>
					</tbody>
				</table>
	
				<h1>Forms</h1>
	
				<form>
					<fieldset className="mb-2">
						<legend>Inputs as descendents of labels (form legend). This doubles up as a long legend that can test word wrapping.</legend>
						<div className="form-group">
							<label>Text input </label>
							<input type="text" defaultValue="default defaultValue" />
						</div>
						<div className="form-group">
							<label>Email input <input type="email" /></label>
						</div>
						<div className="form-group">
							<label>Search input <input type="search" /></label>
						</div>
						<div className="form-group">
							<label>Tel input <input type="tel" /></label>
						</div>
						<div className="form-group">
							<label>URL input <input type="url" placeholder="http://" /></label>
						</div>
						<div className="form-group">
							<label>Password input <input type="password" defaultValue="password" /></label>
						</div>
						<div className="form-group">
							<label>File input <input type="file" /></label>
						</div>
	
						<div className="form-group">
							<label>Radio input <input type="radio" name="rad" /></label>
						</div>
						<div className="form-group">
							<label>Checkbox input <input type="checkbox" /></label>
						</div>
						<div className="form-group">
							<label><input type="radio" name="rad" /> Radio input</label>
						</div>
						<div className="form-group">
							<label><input type="checkbox" /> Checkbox input</label>
						</div>
	
						<div className="form-group">
							<label>Select field <select><option>Option 01</option><option>Option 02</option></select></label>
						</div>
						<div className="form-group">
							<label>Textarea <textarea cols="30" rows="5" defaultValue="Textarea text" /></label>
						</div>
					</fieldset>
	
					<fieldset className="mb-1">
						<legend>Inputs as siblings of labels</legend>
						<div className="form-group">
							<label htmlFor="ic">Color input</label> <input type="color" id="ic" defaultValue="#000000" />
						</div>
						<div className="form-group">
							<label htmlFor="in">Number input</label> <input type="number" id="in" min="0" max="10" defaultValue="5" />
						</div>
						<div className="form-group">
							<label htmlFor="ir">Range input</label> <input type="range" id="ir" defaultValue="10" />
						</div>
						<div className="form-group">
							<label htmlFor="idd">Date input</label> <input type="date" id="idd" defaultValue="1970-01-01" />
						</div>
						<div className="form-group">
							<label htmlFor="idm">Month input</label> <input type="month" id="idm" defaultValue="1970-01" />
						</div>
						<div className="form-group">
							<label htmlFor="idw">Week input</label> <input type="week" id="idw" defaultValue="1970-W01" />
						</div>
						<div className="form-group">
							<label htmlFor="idt">Datetime input</label> <input type="datetime" id="idt" defaultValue="1970-01-01T00:00:00Z" />
						</div>
						<div className="form-group">
							<label htmlFor="idtl">Datetime-local input</label> <input type="datetime-local" id="idtl" defaultValue="1970-01-01T00:00" />
						</div>
	
						<div className="form-group">
							<label htmlFor="irb">Radio input</label> <input type="radio" id="irb" name="rad" />
						</div>
						<div className="form-group">
							<label htmlFor="icb">Checkbox input</label> <input type="checkbox" id="icb" />
						</div>
						<div className="form-group">
							<input type="radio" id="irb2" name="rad" /> <label htmlFor="irb2">Radio input</label>
						</div>
						<div className="form-group">
							<input type="checkbox" id="icb2" /> <label htmlFor="icb2">Checkbox input</label>
						</div>
	
						<div className="form-group">
							<label htmlFor="s">Select field</label> <select id="s"><option>Option 01</option><option>Option 02</option></select>
						</div>
						<div className="form-group">
							<label htmlFor="t">Textarea</label> <textarea id="t" cols="30" rows="5" defaultValue="Textarea text" />
						</div>
					</fieldset>
	
					<fieldset>
						<legend>Clickable inputs and buttons</legend>
						<div className="row">
							<div className="col-6">
								<div className="form-group">
									<input type="image" src="http://lorempixel.com/90/24" alt="Image (input)" />
								</div>
								<div className="form-group">
									<input type="reset" defaultValue="Reset (input)" />
								</div>
								<div className="form-group">
									<input type="button" defaultValue="Button (input)" />
								</div>
								<div className="form-group">
									<input type="submit" defaultValue="Submit (input)" />
								</div>
								<div className="form-group">
									<input type="submit" defaultValue="Disabled (input)" disabled />
								</div>
							</div>
							<div className="col-6">
							<div className="form-group">
									<input className="alter" type="image" src="http://lorempixel.com/90/24" alt="Image (input)" />
								</div>
								<div className="form-group">
									<input className="alter" type="reset" defaultValue="Reset (input)" />
								</div>
								<div className="form-group">
									<input className="alter" type="button" defaultValue="Button (input)" />
								</div>
								<div className="form-group">
									<input className="alter" type="submit" defaultValue="Submit (input)" />
								</div>
								<div className="form-group">
									<input className="alter" type="submit" defaultValue="Disabled (input)" disabled />
								</div>
							</div>
						</div>
	
	
						<div className="form-group">
							<button type="reset">Reset (button)</button>
						</div>
						<div className="form-group">
							<button type="button">Button (button)</button>
						</div>
						<div className="form-group">
							<button type="submit">Submit (button)</button>
						</div>
						<div className="form-group">
							<button type="submit" disabled>Disabled (button)</button>
						</div>
					</fieldset>
	
					<fieldset id="boxsize">
						<legend>box-sizing tests</legend>
						<div><input type="text" defaultValue="text" /></div>
						<div><input type="email" defaultValue="email" /></div>
						<div><input type="search" defaultValue="search" /></div>
						<div><input type="url" defaultValue="http://example.com" /></div>
						<div><input type="password" defaultValue="password" /></div>
	
						<div><input type="color" defaultValue="#000000" /></div>
						<div><input type="number" defaultValue="5" /></div>
						<div><input type="range" defaultValue="10" /></div>
						<div><input type="date" defaultValue="1970-01-01" /></div>
						<div><input type="month" defaultValue="1970-01" /></div>
						<div><input type="week" defaultValue="1970-W01" /></div>
						<div><input type="datetime" defaultValue="1970-01-01T00:00:00Z" /></div>
						<div><input type="datetime-local" defaultValue="1970-01-01T00:00" /></div>
	
						<div><input type="radio" /></div>
						<div><input type="checkbox" /></div>
	
						<div><select><option>Option 01</option><option>Option 02</option></select></div>
						<div><textarea cols="30" rows="5" defaultValue="Textarea text" /></div>
	
						<div><input type="image" src="http://lorempixel.com/90/24" alt="Image (input)" /></div>
						<div><input type="reset" defaultValue="Reset (input)" /></div>
						<div><input type="button" defaultValue="Button (input)" /></div>
						<div><input type="submit" defaultValue="Submit (input)" /></div>
	
						<div><button type="reset">Reset (button)</button></div>
						<div><button type="button">Button (button)</button></div>
						<div><button type="submit">Submit (button)</button></div>
					</fieldset>
				</form>
	
	
				<h1>Multimedia content</h1>
	
				<h3>Audio</h3>
	
				<audio controls></audio>
				<audio></audio>
	
				<h3>Img</h3>
	
				<img src="http://via.placeholder.com/150x150" alt="" />
				<a href="/"><img src="http://via.placeholder.com/150x150" alt="" /></a>
	
				<h3>Svg</h3>
	
				<svg width="100px" height="100px">
					<circle cx="100" cy="100" r="100" fill="#ff0000" />
				</svg>
	
				<h3>Video</h3>
	
				<video controls></video>
				<video></video>
	
			</div>
		</main>
	)
}
