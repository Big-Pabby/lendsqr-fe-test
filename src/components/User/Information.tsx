import React from 'react'
import './Information.scss'

const Information = ({userData} : {userData: any;}) => {
    const datas = [
        {
            id: 1,
            type: "Personal Information",
            typeData: [
                {
                    id: 1,
                    title: 'full Name',
                    text: `${userData.profile.firstName} ${userData.profile.lastName}`
                },
                {
                    id: 2,
                    title: 'Phone Number',
                    text: userData.profile.phoneNumber
                },
                {
                    id: 3,
                    title: 'Email Address',
                    text: userData.email
                },
                {
                    id: 4,
                    title: 'Bvn',
                    text: userData.profile.bvn
                },
                {
                    id: 5,
                    title: 'Gender',
                    text: userData.profile.gender
                },
                {
                    id: 6,
                    title: 'Marital status',
                    text: 'Single'
                },
                {
                    id: 7,
                    title: 'Children',
                    text: 'None'
                },
                {
                    id: 8,
                    title: 'Type of residence',
                    text: userData.profile.address
                },
            ]
        },
        {
            id: 2,
            type: "Education and Employment",
            typeData: [
                {
                    id: 1,
                    title: 'level of education',
                    text: userData.education.level
                },
                {
                    id: 2,
                    title: 'employment status',
                    text: userData.education.employmentStatus
                },
                {
                    id: 3,
                    title: 'sector of employment',
                    text: userData.education.sector
                },
                {
                    id: 4,
                    title: 'Duration of employment',
                    text: userData.education.duration
                },
                {
                    id: 5,
                    title: 'office email',
                    text: userData.education.officeEmail
                },
                {
                    id: 6,
                    title: 'Monthly income',
                    text: `#${userData.education.monthlyIncome[0]} - #${userData.education.monthlyIncome[1]}`
                },
                {
                    id: 7,
                    title: 'loan repayment',
                    text: userData.education.loanRepayment
                },
            ]
        },
        {
            id: 3,
            type: "Socials",
            typeData: [
                {
                    id: 1,
                    title: 'Twitter',
                    text: userData.socials.twitter
                },
                {
                    id: 2,
                    title: 'Facebook',
                    text: userData.socials.facebook
                },
                {
                    id: 3,
                    title: 'Instagram',
                    text: userData.socials.instagram
                },
            ]
        },
        {
            id: 4,
            type: "Guarantor",
            typeData: [
                {
                    id: 1,
                    title: 'full Name',
                    text: `${userData.guarantor.firstName} ${userData.guarantor.lastName}`
                },
                {
                    id: 2,
                    title: 'Phone Number',
                    text: userData.guarantor.phoneNumber
                },
                {
                    id: 3,
                    title: 'Email Address',
                    text: 'debby@gmail.com'
                },
                {
                    id: 4,
                    title: 'Relationship',
                    text: 'Sister'
                },
            ]
        },
    ]
  return (
    <div className="information">
        {
            datas.map((data) => {
                return (
                    <div key={data.id} className="data">
                        <h4>{data.type}</h4>
                        <div className="type">
                            {
                                data.typeData.map((type) => {
                                    return (
                                        <div key={type.id}  className='type-detail'>
                                            <h5>{type.title}</h5>
                                            <p>{type.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Information