import React, { Component } from 'react';

class Research extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="research">
                <h1>Research</h1>
                <h2>
                Researchers at the National Bureau of Economic Research sent out 5,000 different resumes to jobs some with “white sounding names” and some with “black sounding names”, they found that 
	            “Job applicants with white names needed to send about 10 resumes to get one callback; those with African-American names needed to send around 15 resumes to get one callback."
                </h2>
                <h3><a href="http://www.nber.org/digest/sep03/w9873.html">http://www.nber.org/digest/sep03/w9873.html</a></h3>

                <h2>Another study found that job applicants in Canada with Asian names — names of Indian, Pakistani or Chinese origin — were 28 percent less likely to get called for an interview compared to applicants with Anglo names,
                    even when all the qualifications were the same. Researchers used data from a previous study conducted in 2011 where they sent out 12,910 fictitious resumes in response to 3,225 job postings.
                </h2>
                <h3><a href="http://www.npr.org/sections/codeswitch/2017/02/23/516823230/asian-last-names-lead-to-fewer-job-interviews-still">http://www.npr.org/sections/codeswitch/2017/02/23/516823230/asian-last-names-lead-to-fewer-job-interviews-still</a></h3>

                <h2>
                Researchers at the University of Wisconsin sent out 9,400 fake resumes and found that, “overall, black applicants were invited in for interviews 15.2% of the time, while white applicants received invitations 18% of the time.
                To put it another way, African-Americans were 16% less likely to get called in for an interview.”
                </h2>
                <h3><a href="http://fortune.com/2014/11/04/hiring-racial-bias">http://fortune.com/2014/11/04/hiring-racial-bias</a></h3>

                <h2>
                According to an article on Scientific America: “Both male and female scientists were equally guilty of committing the gender bias. Yes – women can behave in ways that are sexist, too.
                Women need to examine their attitudes and actions toward women just as much as men do.”  
                </h2>
                <h3><a href="https://blogs.scientificamerican.com/unofficial-prognosis/study-shows-gender-bias-in-science-is-real-heres-why-it-matters/">https://blogs.scientificamerican.com/unofficial-prognosis/study-shows-gender-bias-in-science-is-real-heres-why-it-matters/</a></h3>

            </div>
        );
    }
}
export default Research;