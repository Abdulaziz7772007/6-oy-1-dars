
function Header() {
	return (
		<div className='backgroung-color header'>
			<div className='header-content' >
				<h2 className='header-title'>Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
				<p className='header-text'>Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.</p>
				<button className='header-button'>
					<a className='header-link' href="#">Qabulga yozilish</a>
				</button>
			</div>
			<img className='header-img' src="./hero-img.png" alt="img" />
		</div>
	)
}

export default Header