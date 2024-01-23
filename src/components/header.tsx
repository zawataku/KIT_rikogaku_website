import React from "react";

export const Header = () => {
    return (
        <div className="drawer z-50 top-0 sticky">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-1 px-2 mx-2 text-2xl hidden lg:block">金沢工業大学 理工学基礎プロジェクト</div>{/*PC表示時のコンテンツ*/}
                    <div className="flex-1 px-2 mx-2 text-md lg:hidden">金沢工業大学 理工学基礎プロジェクト</div>

                    <div className="flex-none hidden lg:block">{/*PC表示時のコンテンツ*/}
                        <ul className="menu menu-horizontal">
                            <li><a>Navbar Item 1</a></li>
                            <li><a>Navbar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="drawer-side">{/*スマホ表示時のコンテンツ*/}
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 pt-24">
                    <li><a className="pt-5 pb-5">Sidebar Item 1</a></li>
                    <li><a className="pt-5 pb-5">Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Header;