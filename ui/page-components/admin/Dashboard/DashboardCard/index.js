import React from 'react'
import { Counter, Flex, RedirectDiv, Title, TitleCounter, TitleText } from './styles'
import Link from 'next/link'

const DashboardCard = ({redirectUrl="/",redirectMsg="",titleMsg="",count=0}) => {
  return (
    <Flex>
            <Title>
                <TitleText>
                    {titleMsg}
                </TitleText>
                <Counter>
                    <TitleCounter>
                        {count}
                    </TitleCounter>
                </Counter>
            </Title>
            {redirectMsg && 
            <RedirectDiv style={{display:"flex", flexDirection:"column", alignItems:"end"}}>
                <Link href={redirectUrl}>
                    {redirectMsg}
			    </Link>
            </RedirectDiv>
            }
    </Flex>
  )
}

export default DashboardCard