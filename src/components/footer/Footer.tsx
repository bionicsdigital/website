import FooterNavigation from './FooterNavigation'
import BottomFooter from './BottomFooter'

export default function Footer() { 
    return <>
    <footer className="border-t border-cyan-400/15 bg-gradient-to-br from-slate-950 via-[#071b27] to-emerald-950 text-white">
        <FooterNavigation />
        <BottomFooter />
    </footer>
    </> 
    }
