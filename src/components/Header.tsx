import { useState } from 'react';

const Header = () => {
    // 1. Tối ưu Logic: Thêm state để điều khiển bật/tắt menu trên điện thoại
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-transparent backdrop-blur-md">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

                {/* 2. Tối ưu SEO: Bỏ thẻ h1 bao quanh logo (h1 nên dành riêng cho tiêu đề chính của trang) */}
                <a href="/" className="logo justify-self-start block transition-transform active:scale-95">
                    <img
                        src="/images/logo.svg"
                        width={40}
                        height={40}
                        alt="Nguyen Tien Dung"
                        className="dark:invert-0"
                    />
                </a>

                {/* 3. Tối ưu Mobile Menu Container */}
                <div className="relative md:justify-self-center flex items-center">
                    <button
                        className="menu-btn md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:bg-zinc-700 active:scale-95 transition-all"
                        onClick={() => setNavOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {/* Tự động đổi icon từ Ba gạch (menu) sang dấu X (close) khi bấm */}
                        <span className="material-symbols-rounded text-zinc-200">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    {/* Sau này bạn sẽ truyền state navOpen vào Component <Navbar navOpen={navOpen} /> ở đây */}
                    <span className="hidden md:block text-zinc-400 font-medium">Navbar</span>
                </div>

                {/* 4. Tối ưu UI Button Contact: Biến link thuần thành một nút bấm cao cấp */}
                <a
                    href="#contact"
                    className="justify-self-end hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-200 bg-zinc-800 border border-zinc-700 rounded-xl hover:bg-zinc-700 hover:text-white hover:border-zinc-600 active:scale-95 transition-all shadow-md shadow-black/20"
                >
                    Contact me
                </a>

            </div>
        </header>
    );
};

export default Header;