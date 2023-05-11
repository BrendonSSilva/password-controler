import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

	prepare({ project, page, greeting }) {
		page.title = `${project.name} - ${greeting}`
		page.description = `${project.name} was made with Nullstack`
	}

	visible = true

	changeVisible() {
		this.visible === true ? this.visible = false : this.visible = true
	}
	render() {
		return (
			<div class="wrap-login100">
				<form class="login100-form validate-form">

					<div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
						<input class="input100" type="text" name="email" placeholder='E-Mail' />
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<img src={this.visible ? './hide.svg' : './view.svg'} onclick={this.changeVisible} class="btn-show-pass" />
						<input class="input100" type={this.visible ? 'password' : 'text'} placeholder='Password' name="pass" />
					</div>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>

					<div class="text-center p-t-115">
						<span class="txt1">
							Don’t have an account?
						</span>

						<a class="txt2" href="#">
							Sign Up
						</a>
					</div>
				</form>
			</div>
		)
	}

}

export default Home
