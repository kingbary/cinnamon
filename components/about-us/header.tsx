import React from 'react'
import Container from '../universal/container'

export default function AboutUsHeader() {
    return (
        <header className='relative pt-2 h-screen'>
            <Container className='second-container bg-[#14141A] flex items-center pt-20 pb-[112px] h-full'>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <div className='flex flex-col w-full items-center gap-6'>
                        <h2 className='text-center text-white text-[120px] font-bold leading-[120px] -tracking-[10px] uppercase font-poppins'>About us</h2>
                    </div>
                    <div className='max-w-[532px] flex flex-col items-center justify-center'>
                        <p className='text-white text-xl text-center font-medium leading-8 -tracking-[0.5px]'>Lorem ipsum in id interdum felis ut elit eros urna sociis bibendum varius dui nisl aliquet euismod augue ullamcorper integer in ornare at lectus blandit arcu elementum blandit eget vel a fringilla pellentesque arcu massa lacus nisi consectetur risus tempus suspendisse id in ligula scelerisque euismod integer purus egestas curabitur volutpat quam accumsan habitant vulputate sapien bibendum in hac suspendisse mattis tempus gravida praesent in mattis nullam cras tortor dui est elementum eget eget sed donec vitae cras pellentesque eleifend.</p>

                    </div>
                </div>
            </Container>
        </header>
    )
}
