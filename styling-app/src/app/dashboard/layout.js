import stytles from './dashboard.module.css'

export default function DashboardLayout({ children }) {

    return <div className={stytles.dashboard}>
        {children}
    </div>
}