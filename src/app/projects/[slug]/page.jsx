import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return projectsData.map(project => ({ slug: project.slug }));
}

export default function SingleProjectPage({ params }) {
    const { slug } = params;
    const project = projectsData.find(p => p.slug === slug);

    if (!project) return notFound();

    const { title, category, src, description, detail,} = project;
    const { year, client, services, images, type } = detail;

    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>{category} - {client}</p>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={src} alt="image" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>{year}</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>{client}</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>{services}</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>{type}</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>{description}</p>
                            {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p> */}
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}

                <div className="row pt-30">
                    {Object.values(images).map((img, index) => (
                        <div key={index} className="col-lg-6">
                            <div className={`single-image wow fadeInUp delay-0-${index + 2}s`}>
                                <Image width={633} height={679} sizes="100%" style={{ width: "100%", height: "auto" }} src={img} alt={`Gallery ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={img1} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={img2} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={img3} alt="gallery" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={img4} alt="gallery" />
                        </div>
                    </div>
                </div> */}
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

