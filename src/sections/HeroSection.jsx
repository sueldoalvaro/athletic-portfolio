import { useState } from 'react';
import emailjs from '@emailjs/browser';
import heroImage from '../assets/1.png';

emailjs.init({
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const HeroSection = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('idle');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus('sending');

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					email: email,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			setStatus('sent');
			setEmail('');
		} catch (error) {
			console.error('EmailJS failed to send the email:', error.status, error.text);
			setStatus('error');
		}
	};

	return (
		<section id="hero" className="flex min-h-[calc(100vh-60px)] scroll-mt-[60px] flex-col justify-center bg-slate-900 px-4 py-8 text-white md:px-8 md:py-12" aria-labelledby="hero-title">
			<div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
				<div className="flex items-center justify-center p-2">
					<img
						className="max-h-[65vh] w-auto max-w-full rounded-2xl object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.01]"
						src={heroImage}
						alt="Athlete portrait"
					/>
				</div>

				<div className="flex flex-col items-center text-center md:items-start md:text-left">
					<h1 id="hero-title" className="mb-3 font-serif text-4xl font-bold tracking-wide text-amber-300 sm:text-5xl md:text-6xl">
						My CV
					</h1>
					<p className="mb-6 max-w-lg text-lg text-slate-300">
						My athletic CV: all you need to know in one place.
					</p>

					<form className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-1.5 shadow-xl sm:flex-row sm:items-center sm:rounded-full md:-ml-4" onSubmit={handleSubmit}>
						<label className="sr-only" htmlFor="hero-email">Your email address</label>
						<input
							id="hero-email"
							type="email"
							value={email}
							onChange={(event) => {
								setEmail(event.target.value);
								setStatus('idle');
							}}
							placeholder="Your email address"
							required
							className="w-full flex-1 bg-transparent pl-2.5 pr-4 py-2.5 text-center text-base text-white placeholder-slate-400 focus:outline-none sm:text-left sm:text-sm"
						/>
						<button
							type="submit"
							disabled={status === 'sending'}
							className="flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 shadow-md shadow-amber-400/20 transition-all duration-200 hover:bg-amber-300 hover:scale-[1.02] disabled:opacity-50 cursor-pointer whitespace-nowrap"
						>
							<span>{status === 'sending' ? 'Sending...' : 'Send me the file'}</span>
							<span aria-hidden="true">→</span>
						</button>
					</form>
					<p className="mt-3 min-h-[1.25rem] text-sm font-medium text-amber-300" role="status">
						{status === 'sent' && 'Thanks! Check your inbox for the file.'}
						{status === 'error' && 'Something went wrong. Please try again.'}
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
