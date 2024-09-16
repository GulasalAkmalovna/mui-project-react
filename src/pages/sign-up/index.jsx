import React from 'react'
import { Bird, Footer, Header, SignUpComponent } from '../../components'

const Index = () => {
    return (
        <>
            <Header />
            <section className=' w-full max-w-[1400px]  mt-[150px] m-auto  flex min-h-[600px] items-center p-[30px] gap-[150px]' >
                <Bird />
                <SignUpComponent />

            </section>
            <Footer />
        </>
    )
}

export default Index