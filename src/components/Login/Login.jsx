import React, { useState } from 'react'
import checkImg from '@/assets/images/check_img.svg'
import Button from '@/components/Button/Button'

const Login = ( { setCurrentPage } ) => {
	return (
		<div className="container pt-[200px]">
			<div className="flex flex-col items-center">
				<div className="mb-4 flex items-center justify-center">
					<img src={checkImg} alt="Check-image" />
					<h1 className="text-fs-8">ONLINE TODO LIST</h1>
				</div>
				<h2 className="mb-8 text-fs-5">最實用的線上代辦事項服務</h2>
				<div className="w-full max-w-sm">
					<form>
						<div className="space-y-1 mb-4">
							<label htmlFor="email" className="block text-[14px] font-bold mb-1">
								Email
							</label>
							<div>
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									placeholder='請輸入Email'
									className="block w-full rounded-md py-3 px-4 text-gray placeholder:text-gray"
                  required
								/>
							</div>
							<p className="text-[14px] font-bold text-alert">此欄位不得為空</p>
						</div>

						<div className="space-y-1 mb-7">
							<label htmlFor="password" className="block text-[14px] font-bold mb-1">
								Password
							</label>
							<div>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="password"
									placeholder='請輸入密碼'
									className="block w-full rounded-md py-3 px-4 text-gray placeholder:text-gray"
                  required
								/>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center space-y-6">
							<Button className="bg-dark text-white hover:cursor-pointer">
                登入
							</Button>

              <Button className="text-dark hover:cursor-pointer" onClick={() => setCurrentPage('register')}>
                註冊帳號
							</Button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default Login
