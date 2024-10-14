import React, { useState } from 'react'
import checkImg from '@/assets/images/check_img.svg'
import Button from '@/components/Button/Button'
import Swal from 'sweetalert2';

const Login = ( { registerUser, setCurrentPage } ) => {

	const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = () => {
    if (password !== confirmPassword) {
			Swal.fire({
        icon: 'error',
        title: '密碼不同',
        text: '兩次密碼不同！請重新輸入！',
      });
      return;
    }
    registerUser(email, password, nickname);
  };

	return (
		<div className="container pt-[200px]">
			<div className="flex flex-col items-center">
				<div className="mb-4 flex items-center justify-center">
					<img src={checkImg} alt="Check-image" />
					<h1 className="text-fs-8">ONLINE TODO LIST</h1>
				</div>
				<h2 className="mb-8 text-fs-5">註冊帳號</h2>
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
									onChange={(e) => {
										setEmail(e.target.value)}
									}
                  required
								/>
							</div>
						</div>

						<div className="space-y-1 mb-4">
							<label htmlFor="nickname" className="block text-[14px] font-bold mb-1">
								您的暱稱
							</label>
							<div>
								<input
									id="nickname"
									name="nickname"
									type="text"
									autoComplete="nickname"
									placeholder='請輸入暱稱'
									className="block w-full rounded-md py-3 px-4 text-gray placeholder:text-gray"
									onChange={(e) => setNickname(e.target.value)}
                  required
								/>
							</div>
						</div>

						<div className="space-y-1 mb-4">
							<label htmlFor="password" className="block text-[14px] font-bold mb-1">
								密碼
							</label>
							<div>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="password"
									placeholder='請輸入密碼'
									className="block w-full rounded-md py-3 px-4 text-gray placeholder:text-gray"
									onChange={(e) => setPassword(e.target.value)}
                  required
								/>
							</div>
						</div>

						<div className="space-y-1 mb-7">
							<label htmlFor="confirm-password" className="block text-[14px] font-bold mb-1">
								再次輸入密碼
							</label>
							<div>
								<input
									id="confirm-password"
									name="confirm-password"
									type="password"
									autoComplete="password"
									placeholder='請再次輸入密碼'
									className="block w-full rounded-md py-3 px-4 text-gray placeholder:text-gray"
									onChange={(e) => setConfirmPassword(e.target.value)}									
                  required
								/>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center space-y-6">
							<Button className="bg-dark text-white hover:cursor-pointer" onClick={() => handleSubmit()}>
                註冊帳號
							</Button>

              <Button className="text-dark hover:cursor-pointer" onClick={() => setCurrentPage('login')}>
                登入
							</Button>
						</div>
					</form>

				</div>
			</div>
		</div>
	)
}

export default Login
