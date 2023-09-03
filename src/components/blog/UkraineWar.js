import FullScreenSection from "../FullScreenSection";
import { Heading, VStack, Box, Text, Link, ChakraProvider, Image, Grid, GridItem, Tooltip } from "@chakra-ui/react";
import Header from "../headers/Header";
import Footer from "../Footer";
import wh_bg from "../../images/white_bg_2.jpg"
import peter from '../../images/blog/ukraine/peter_2.jpg'
import eastern_e_18th from '../../images/blog/ukraine/eastern_empire.jpg'
import current_state from '../../images/blog/ukraine/current_progress.jpg'
import russo_turk from '../../images/blog/ukraine/Kagula.jpg'
import combined_arms from '../../images/blog/ukraine/combined_arms.jpg'
import objectives from '../../images/blog/ukraine/objectives.png'
import putin from '../../images/blog/ukraine/putin.jpg'
import y_p from '../../images/blog/ukraine/y_p.jpg'
import putin_yi from '../../images/blog/ukraine/putin_yi.jpg'


function UkraineWar() {
    return (
        <ChakraProvider>
            <main>
                <Header />
                <FullScreenSection 
                    alignItems="center"
                    backgroundImage={wh_bg}
                    // spacing={2}
                    width="100%"
                    backgroundColor="black"
                    flex={1}
                    // padding={4}
                    color='gray.900'
                    
                >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <VStack width='75%'>
                <Heading py={8} >
                    What is Putin's Plan?
                </Heading>
                <Text fontStyle='italic'> To understand what he hopes to achieve, first we need to understand 
                    Russia and Russian history. There is a clear consensus that this is an attempt
                    to create a multi-polar world order, but there are classic Russian themes on display which 
                    likely precipitated this conflict. 
                </Text>
                <Heading as='h2'>Peter's Russia</Heading>
                </VStack>
                <Grid
                alignItems='center'
                justifyContent='center'
                width='80%'
                templateColumns="repeat(3, 1fr)" gap={2}
                fontStyle='italic'>
                <GridItem >
                <Tooltip label="Peter the Great - Russia's Modernizer">
                    <Image src={peter} maxHeight='300px' width='350px'/>
                    </Tooltip></GridItem>
                <GridItem><Text >Peter the Great was one of the most influential European monarchs, leading Russia into modernity
                    in a number of facets. He fostered intellectualism and industry; his reign was a golden age for the Russian people.
                    One of Peter's major objectives was always to establish a fresh water port, given that both the Arctic and the Baltic were only navigable
                    depending on the time of the year. Trade by sea was and still is an absolutely critical
                    facet of international trade and thus he, along with other Russian leaders, realized the importance of having a year-round port.</Text></GridItem>
                <GridItem>
                <Tooltip label="Russian Eastern Expansion">
                    <Image src={eastern_e_18th} />
                    </Tooltip></GridItem>
                </Grid>
                <VStack width='75%' fontStyle='italic' whiteSpace='break-spaces'>
                <Text >As you may notice in the map above, Peter pushed West in the Baltic, however his ambitions
                    were realized by Catherine. Seizing and maintaining the Crimean region is of the utmost importance to the Russian state, 
                    then and now, as it maintains global trade possibilities that they otherwise lack. 
                </Text>
                <Text>This helps give some context as to one of Putin's primary aims, bringing Crimea and the accompanying area back in the Russian fold.
                    Now, he had already occupied and annexed an important portion of this territory in his 2014 invasion,
                    however it remained in a precarious state given there was a lack of a significant land border with Russia.
                    For anyone who knows how the Russian army operates, from a logistical standpoint they rely entirely 
                    on road and railways. Replenishment by air or sea is not a capability that the Russian state can flex, unlike the Americans.
                    In fact, this war has shown that the Russian army even struggles with it's land based supply lines but it at least provides
                    a viable option, nonetheless.
                    <br />
                    <br />
                    As we can see in the image below, Russia clearly was targeting establishing a strong land beachhead with 
                    it's strategically valuable, previously annexed territory. Keep in mind, as of 2021, Russia exported $484B of goods,
                    with the top exports of Russia being Crude Petroleum ($113B), Refined Petroleum ($81.8B) and Petroleum Gas ($37.7B).
                    Finding a war to transport their extensive natural gas reserves is of national importance and solidifying their hold on their most important
                    port makes perfect, rational sense; it's a strategic imperative. Ukraine potentially joining NATO in the future would put a massive kink in this which could
                    in some Russian minds undermine national sovereignty, while surely impacting the idea of re-establishing an ascendant Russia as a global leader.
                    Given the above, rather than seeing this war as simply just a border expansion push, it really is about securing Russia's future,
                    in the eyes of Putin and Co., to ensure the flow of natural gas and coal can be distributed globally.
                </Text>
                <Tooltip label="Status Quo of the War">
                <Image src={current_state}/>
                </Tooltip>
                <Heading as='h3'>Ukraine's Spring Counter-Offensive</Heading>
                <Text whiteSpace='break-spaces' textAlign=''>Given that we know that Putin is hell-bent on annexing the entirety of the Crimean region as a strategic imperative, 
                    it seems inevitable that Ukraine will focus on this land bridge with it's major offensive. 
                    <br /> 
                    <br /> 
                    So far, Ukraine has held on admirably and have proven they have a qualitative advantage over the Russian Army and the Mercenary Corps the 
                    Russian State employs. Another classic Russia theme has been on display during this war; the gross ineptitude of the Russian army continues
                    to be highlighted.
                    <Tooltip label='Russo-Turkish War 1768–1774 '>
                    <Image src={russo_turk} float='left' margin={2}/>
                    </Tooltip>
                    <br/>
                    Known for underwhelming performances, the Russo-Turkish conflicts of the 18th Century were among their least impressive performances.
                    Characterized as the 'one-eyed fighting the blind', ironically the Russo-Turkish War (1768–1774) brought Crimea into the Empire. History is littered
                    with other poor performances, such as the Russo-Japanese War, the 19th Century Crimean War and more recently, the Soviets incursion into Afghanistan.
                    An underlying issue is a lack of professionalism in the military and the fact that corruption is endemic. We saw that the 'vast tank reserves' were 
                    being pilfered, were poorly maintained or not at all, and the training was limited. Across the army, there is lack of standardized training, which has led to the 
                    Ukrainian army punching above their weight. Russian command has also been fairly inept, proving that they lack tactical sophistication and making a number of critical blunders.
                    <br/>
                    <br/>
                    Juxtapose this with the combined arms training the Ukrainians have received from the US military, the premier qualitative force on the planet. 
                    Continually, they have shown during this conflict they are the better trained and operationally superior force, despite being numerically inferior,
                    in terms of soldiers, tanks, aircraft, artillery and naval vessels. 
                    <Tooltip label='Ukrainians being trained on American Patriot Missile Systems '>
                    <Image src={combined_arms}  margin={2}/>
                    </Tooltip>
                    <br/>
                    So what will this inevitable offensive look like? We are fairly certain it will come in the near future, for a number of reasons.
                    Firstly, Ukrainian command knows that it relies on Western support in order to keep fighting and that this is not guaranteed to continue indefinitely.
                    The longer the war is prolonged, the more likely aid wavers. There needs to be some momentum generated.
                    <br/> Secondly, Putin has adopted his Syrian 'Total War' playbook, with the aim of employing the classic
                    Russian strategy of effectively bleeding out the enemy, outlasting them with their superior manpower. Essentially, throw bodies at the situation and use artillery to 
                    target civilian infrastructure to incapacitate the enemy. We have seen this with Russia's striking of the Ukrainian power grids; thankfully the response has been effective so far 
                    in terms of mitigating the loss of life but there is no doubt a severe burden has been incurred by the Ukrainian people.
                    <br/>
                    Lastly, the Ukrainian manpower reserves are vastly inferior in comparison to Russia. Even though they have done a fantastic job thus far,
                    eventually there will a point of inflection. The goal should be to end the war before this becomes a true topic of discussion.
                    <Tooltip label='Ukrainian targets '>
                    <Image src={objectives} float='right' margin={2} maxHeight='300px'/>
                    </Tooltip>
                    <br/>
                    <br/> It's likely that the offensive targets Kherson and Zaporizhia, in order to interrupt a key piece of Russia infrastructure, the Crimean Bridge.
                    We have already seen Ukraine target it, and this will be concerted effort to cut Russia off while also displaying that Ukraine can actually repulse Russian occupation. 
                    This will be a combined arms effort, however the lack of air support will be highly problematic for the Ukrainian army and command. It will be interesting to see if the Western tanks 
                    play a significant role, given all the press around their delivery and potentially impact. While advanced arms training has gone well, there is always a difficulty in actually implementing
                    what was practised on an actual battlefield. 

                    <br/>
                    <br/>
                    There are quite a few questions surrounding how effective this push will be. We know the Russian army features quite a few convicts and raw recruits of little to no training and of questionable morale.
                    Are the Ukrainians able to incorporate artillery strikes? Do they have enough in the way of munitions? Can they deal with Russian air dominance? How effectively were they trained? How goes is the intelligence
                    supplied by it's key allies? Can they effectively clear all the mines the Russians have laid in their path?
                    <br/>
                    <br/>
                    Putin sees this war as being one that if drawn out long enough, Russia will emerge victorious and outlast Ukraine. This could either bolster his resolve,
                    cause a stalemate,  
                    or potentially destabilize him at home to where change is inevitable.
                </Text>
                <Tooltip label='Vladimir Putin '>
                    <Image src={putin} float='right' margin={2} maxHeight='300px'/>
                    </Tooltip>
                <Heading as='h3'>Domestic Politics in Russia</Heading>
                <Text whiteSpace='break-spaces'>
                One thing to note is that previously, in the early 2010s, rising oil and gas prices helped foster rapid economic growth, helping stabilize Putin's regime, however this has since tailed off. 
                    Given this fact, he has been looking for another source of stability; enter one of the timeless tactics, 'National Pride'.
                    Russia's assertiveness and the idea of reclaiming old borders and glory has been a key objective, but also
                    a major reason for Putin's continued tenure. His foreign policy suits the domestic landscape, in that it has helped embed his as an autocrat,
                    despite his harsh treatment of Russian citizens and often tyrannical behaviour. The idea of Russia establishing itself as a major international player
                    and moving from a junior Western partner to an international leader is a strong reason for his popularity, so this war helps theoretically advance this idea.
                     Part of the rational for these constant conflicts
                    generated by Putin has been to solidify his reign domestically; the Russian state constantly pumps out internal propaganda reinforcing this and advocating for a 'strong Russia'.
                    <br/>
                    <br/>
                    <Tooltip label='Yevgeny Prigozhin - Future political adversary?'>
                    <Image src={y_p} float='right' margin={2} maxHeight='300px'/>
                    </Tooltip>
                    A key domestic tactic for Putin is the struggle between Russian elites. Power in Russia is distributed informally, through a patronage network
                    that Putin leads, which allows vast access to wealth and power for those who he promotes.  Perhaps an ancillary objective, nonetheless, this war has brought this to the global public's attention.
                    Yevgeny Prigozhin, the head of the 'Wagner Group', a Russian state-sponsored mercenary outfit, is the latest figure to emerge. He currently is an 
                    'Icarus-esque' figure, however this war has heightened his profile and increased his exposure exponentially.
                    To counter-balance this, Putin has stripped supply to his group, chastised him and pitted the military elites against him.
                    This is classic behaviour in Putin's Russia, the constant infighting; he attempts to maintain a level of uncertainty and balances the power of those around him,
                    so that they stay loyal but lack the capacity to truly challenge him. The conflict between the Russian MoD and the Wagner Chief is just one of the internal power plays that
                    Putin is dealing with. This war has enabled Putin to re-calibrate his patronage network and re-balance the various players, as he sees fit.
                    <br />
                    <br />
                    Although Russian elections are neither free nor fair, they do serve as a legitimization ritual for the ruling party. The upcoming 2024 elections 
                    also likely played a role in the conception of this war, as Russian officials and Putin himself thought this war would be a quick blitz through Ukraine, which would 
                    serve as a way to reinforce his profile domestically and increase his popularity heading into the new ballot session.
                    Even though the war hasn't gone to plan, he is able to shift the paradigm and say the West is teaming up against Russia in it's conflict against 
                    'Nazism' in Ukraine, in sort of an 'Us-against-Them' struggle that Russia faces. This is also a quintessential theme for Russia, that it's 'otherness'
                    causes it to be treated unfairly by the other established powers, which is something that Putin leverages fairly effectively domestically. There are questions about how mobilization and recruitment will impact his profile
                    in Russia, however there hasn't been any major public unrest yet. 
                    <br/><br/>
                    It's fairly clear that a major reason for this conflict stems from internal Russia politics and a need to solidify support to counterbalance against 
                    a stagnating economy and internal opposition, while also continually reshuffling his patronage circle.
                </Text>
                <Heading as='h3'>Heading towards a Multi-Polar World?</Heading>
                <Text whiteSpace='break-spaces'>
                    To summarize the rationale for this war, it is predicated on the idea of a vulnerable Russia, one with an uncertain economic future, a need to stabilize itself internally and a limited window in which to 
                    achieve an objective which has been of critical importance for the Russian leaders of the last few centuries, harkening back to Peter the Great. Another critical goal was to alter the international system and shift the balance of power,
                    catapulting Russia into ascendancy from it's current role as junior partner or global bit-player.
                    <Tooltip label='Vladimir Putin and Xi Jinping, Russia and China - A New World Order?'>
                    <Image src={putin_yi} float='left' margin={2} maxHeight='300px'/>
                    </Tooltip>
                    <br/>Another possible part of Putin's plan was to demonstrate to China that Russia is an excellent partner and ally, by demonstrating it's ability
                    to go up against and defeat the West. Ultimately, this plan has not come to fruition yet, but we have seen that Putin has made deepening ties with China as 
                    a strategic imperative for Russia. For the CCP, they have been cautious as they rely on Western markets and any Western sanctions could be crippling to their economy; for now, China acts
                    as an 'impartial' mediator.
                    Nevertheless, we have seen a closening of ties, which was a likely objective of this war for Putin. 
                    <br/><br/>
                    China for it's part is a very willing partner for this idea of reshaping the global world order. In fact, after a recent March summit with Russia,
                    both parties explicitly called for this very thing, for there to be an international reordering. Not only did they share this vision, they also claimed a desire 
                    to deepen economic ties, with each leader expressing support for the other in what was a powerful show of support by China, with the CCP media claiming this relationship has acquired critical importance 
                    for the global landscape. This is perhaps the most interesting element of this war, as China itself has expressed explicit desire to go off on it's own aggressive invasions, with a major focus on occupying Taiwan as a national imperative.
                    Does this deepening of ties embolden either nation to create future conflicts?
                </Text>
                <Heading as='h4'>Where does this lead?</Heading>
                <Text whiteSpace='break-spaces'>
                    There are a number of root causes for this conflict, some deeply entrenched in history, some rooted in modernity. The question that needs to be asked though is what happens next? Ultimately, we will need to see what 2023 brings in terms of this conflict,
                    however it does create a frightening prospect for the future. One thing is for certain, peace can't be taken for granted. Too often, we just assume peace despite this period being a relative historical anomaly. The stakes now are the highest the world has ever seen,
                    with nuclear proliferation having potentially drastic consequences for any conflict, beyond anything we have seen previously. We are in a period of turbulence, but what is reassuring is that America has taken center-stage as world leader and has taken an active and pragmatic approach in this conflict 
                    which is very reassuring. The next few months in this conflict will be telling and will likely shape the course of the next few years, perhaps even decades.
                  
                    </Text>  <br/>
                    <br/>
                    <br/>
                </VStack>
                </FullScreenSection>
                <Footer />
            </main>
        </ChakraProvider>
    )
}
export default UkraineWar;