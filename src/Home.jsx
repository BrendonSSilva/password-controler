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
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" name="email" placeholder='E-Mail' required />
					</div>
					<div class="wrap-input100 validate-input">
						<img src={this.visible ? './view.svg' : './hide.svg'} onclick={this.changeVisible} class="btn-show-pass" />
						<input class="input100" type={this.visible ? 'password' : 'text'} placeholder='Password' name="pass" required />
					</div>
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}

}

export default Home
