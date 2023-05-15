import Nullstack from 'nullstack'
import './Home.css'

class Home extends Nullstack {

	prepare({ page }) {
		page.title = `Password Control`
	}

	changeVisible() {
		this.visible = !this.visible;
	}

	render() {
		return (
			<form class="wrap-input100">
				<input class="input100" type="text" name="email" placeholder='E-Mail' required />
				<img src={this.visible ? './view.svg' : './hide.svg'} onclick={this.changeVisible} class="btn-show-pass" />
				<input class="input100" type={this.visible ? 'password' : 'text'} placeholder='Password' name="password" required />
				<button class="login100-form-btn">
					Login
				</button>
			</form>
		)
	}

}

export default Home
