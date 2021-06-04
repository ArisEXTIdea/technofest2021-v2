import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { webinarbanner } from '../../assets'
import { Button, Footer, Navbar } from '../../components'

export class Webinarabout extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navbar />
                <div className="row justify-content-center mt-5">
                    <div className="col-10 my-5">
                        <h2 className='text-center mb-3'>Webinar TECHNOFEST 2021</h2>
                        <img src={webinarbanner} alt="Mobile Legend Banner" className='img-fluid'/>
                        <h3 className='mt-5'>Syarat dan Ketentuan Peserta:</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repellendus accusantium. Obcaecati laboriosam error facilis reprehenderit amet itaque, magnam impedit fuga voluptas odio similique aperiam fugiat voluptatibus commodi ea cumque. Aliquam voluptatum deleniti debitis exercitationem provident ullam dolores vitae beatae praesentium est, esse alias, fuga voluptatibus architecto distinctio ipsum suscipit quod iure enim possimus rerum minima accusamus saepe. Inventore, laboriosam! Placeat rerum cumque consectetur ut nam vel excepturi facilis id eius suscipit. Quia deserunt modi libero, velit harum tempore quasi laudantium autem hic? Sint nostrum dignissimos natus consequatur vel doloremque facilis hic! Tempore illum, optio modi inventore nihil consequuntur vero ipsam quod! Ex perferendis, ut aperiam asperiores illum quasi in aut natus! Sequi, id repellat non velit debitis tenetur excepturi quos vel, consequatur iure odit molestiae corporis. Qui eum velit perferendis alias porro odit corporis corrupti, eius eos suscipit id magnam quis eveniet enim omnis quisquam. Ullam nisi distinctio nihil numquam architecto sapiente dolor corrupti, aperiam cum odio molestiae necessitatibus tempore perferendis. Voluptas ipsum impedit autem nulla fugit nesciunt itaque, asperiores nobis? Incidunt sit omnis pariatur cum sapiente corporis nisi quasi, nam ratione dolore officia error vero laboriosam consequatur doloremque. Porro rerum est odit voluptate quasi ad voluptatem distinctio repellat!</p>
                        <Link to="/webinar/daftar"><Button title="Daftar Sekarang" addStyle="btn-block"/></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Webinarabout
