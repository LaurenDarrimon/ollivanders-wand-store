import Layout from '../../components/layout.js';
import Link from 'next/link';



//question for later - is "lib" naming Next.js convention or optional? 
import { getPeopleIds, getData } from '../../lib/data.js'


//create getstaticprops to return all the data for one person

export async function getStaticProps({ params }) {

    const personData = await getData(params.id);

    return {
        props: {
            personData
        },
        revalidate: 60
    };
}

//all possible URLs 
export async function getStaticPaths() {

    const dynamicPaths = await getPeopleIds();

    return {
        paths: dynamicPaths,
        fallback: false
    };
}

//make a compoenent that will display the persons details at the dynamic route 

export default function Entry (  { personData } ){

    console.log("---BEFORE Person Data---");
    console.log(personData)

    return (
        <Layout>
            <article className="card col-6">
                <div className="card-body">
                    <h4 className="card-title text-dark">
                        {personData.post_title}
                    </h4>
                    <h5 className="card-subtitle mb-2 text-muted"> 
                        by {personData.user_login}
                    </h5>
                    <p  className="card-text text-dark">
                        Wand Attributes: </p>
                    <ul className="card-text text-dark">
                        <li>
                            Base Wand Wood: {personData.acf_fields.wood}
                        </li>
                        <li>
                            Magical Core : {personData.acf_fields.core}
                        </li>
                        <li>
                            Style & Form: {personData.acf_fields.style}
                        </li>
                    </ul>
                        
                    <div className="card-text text-dark" dangerouslySetInnerHTML={{__html: personData.post_content}}/>
                    <br/>
                </div>
            </article>
        </Layout>
    )
}