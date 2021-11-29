import styled from 'styled-components';
import Image from 'next/image';

import { media } from '@/styles/media';
import Layout from '@/components/layout';
import Block from '@/components/block';
import { TextBlock } from '@/components/text';
import { UnorderedList } from '@/components/list';
import SkillsItem from '@/components/skillsItem';
import Switcher from '@/components/switcher';

const FirstBlock = styled(Block)`
    min-height: calc(var(--full-screen-h) + var(--basic-spacing));
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
`;

const MeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${media.md} {
        flex-direction: row;
    }
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

// work experience blocks
const ExperienceBlock = styled(Block)``;

const ExperienceBlockText = styled.div`
    margin-top: var(--basic-spacing);

    h3 {
        color: var(--text-primary);
    }

    @media ${media.md} {
        margin: 0;
        margin-left: var(--basic-spacing);
    }
`;

const TelegramBotContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
    }
`;

const StyledCoverVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(var(--basic-spacing) / 2);
`;

const TgBotCover = styled(StyledCoverVideo)`
    width: 100%;
    height: auto;

    @media ${media.md} {
        width: 400px;
    }
`;

const ContactBlock = styled(Block)`
    @media ${media.md} {
        height: calc(var(--full-screen-h) + var(--basic-spacing));
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
    }

    a {
        display: block;
        margin: calc(var(--basic-spacing) * 2) 0;
        text-decoration: none;
        color: var(--base-text-color);
        font-family: var(--font-headline);
        font-size: calc(var(--basic-font-size) * 0.7);

        @media ${media.md} {
            margin: calc(var(--basic-spacing) / 4) 0;
        }
    }
`;

const ImageContainer = styled.div`
    width: 226px;
    height: auto;
    margin: var(--basic-spacing);

    @media ${media.md} {
        margin: 0;
        margin-right: var(--basic-spacing);
    }
`;

const EmogiContainer = styled.div`
    margin-top: var(--basic-spacing);
`;

const Home = () => {
    return (
        <Layout>
            <Switcher />
            <FirstBlock>
                <MeContainer>
                    <ImageContainer>
                        <Image
                            alt='Аватар'
                            src='/assets/avatar.png'
                            layout='intrinsic'
                            width={452}
                            height={422}
                        />
                    </ImageContainer>
                    <h1>Андрей Носов</h1>
                </MeContainer>
                <TextBlock>
                    Всем привет! Я занимаюсь web-разработкой, IoT, производством
                    одежды и прочими штуками. Играю в футбол, занимаюсь спортом,
                    смотрю кино. Летом ездил на озеро, было жарко. Вроде, больше
                    нечего сказать...
                </TextBlock>
            </FirstBlock>
            <Block>
                <h2>Образование</h2>
                <UnorderedList>
                    <li>
                        <p>2015-2019: УрФУ (Екб)</p>
                        <p>
                            Бакалавриат: “Информационные системы и технологии”
                        </p>
                        <p>Диплом: “Вычисление размеров объекта по камерам”</p>
                    </li>
                    <li>
                        <p>2017-2018: Яндекс (Екб)</p>
                        <p>Курсы по фронтенду в УрФУ</p>
                    </li>
                    <li>
                        <p>2019-2021: Университет ИТМО (СПб)</p>
                        <p>Магистратура “Вычислительные системы и сети”</p>
                        <p>
                            Диплом: “Решение задачи выбора оптимальной
                            технологической платформы для систем IoT в
                            конкретных проектах”
                        </p>
                    </li>
                </UnorderedList>
            </Block>
            <ExperienceBlock>
                <h2>Опыт работы</h2>
                <TelegramBotContainer>
                    <TgBotCover autoPlay muted loop>
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638177851/nosov-cv/crmbot_pexm4w.webm'
                            type='video/webm'
                        />
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638177851/nosov-cv/crmbot_fg4tbu.mp4'
                            type='video/mp4'
                        />
                    </TgBotCover>
                    <ExperienceBlockText>
                        <h3>Telegram-бот</h3>
                        <p>
                            Разработка для получения уведомлений и данных из
                            формы сайта в Telegram-мессенджер.
                        </p>
                    </ExperienceBlockText>
                </TelegramBotContainer>
            </ExperienceBlock>
            <Block>
                <h2>Знания</h2>
                <SkillsContainer>
                    <SkillsItem>
                        <h3>dev</h3>
                        <p>JavaScript/HTML/CSS</p>
                        <p>API: REST/GraphQL</p>
                        <p>DB: NoSQL (MongoDB)</p>
                        <p>React.JS (Next.JS)</p>
                        <p>Небольшой опыт React Native</p>
                        <p>Git</p>
                    </SkillsItem>
                    <SkillsItem>
                        <h3>design</h3>
                        <p>Figma</p>
                        <p>Ai/Ap/Ae (Adobe)</p>
                    </SkillsItem>
                    <SkillsItem>
                        <h3>iot</h3>
                        <p>C/C++, Python</p>
                        <p>
                            Прикладной уровень:
                            <br />
                            MQTT, AMQP, DDS, CoAP, т.п.
                        </p>
                        <p>Построение систем с ESP, Raspberry Pi</p>
                        <p>IDE: ArduinoIDE, PlatformIO</p>
                        <p>Wireshark</p>
                        <p>(все в рамках обучения в университете)</p>
                    </SkillsItem>
                    <SkillsItem>
                        <h3>eng</h3>
                        <p>B1-B2 (Intermediate+)</p>
                        <p>Курсы на англ. языке (ИТМО)</p>
                        <p>
                            Cвободно работаю с<br />
                            профильной информацией
                        </p>
                    </SkillsItem>
                    <SkillsItem>
                        <h3 style={{ margin: 0 }}>open for new!</h3>
                    </SkillsItem>
                </SkillsContainer>
            </Block>
            <ContactBlock>
                <h2>Контакты</h2>
                <a href='mailto:drenosov@gmail.com'>drenosov@gmail.com</a>
                <a href='tel:+79920201025'>+7-992-020-10-25</a>
                <a href='https://t.me/andrewnosov'>TG@andrewnosov</a>
                <EmogiContainer>
                    <Image
                        priority
                        alt='Переключатель (вкл.)'
                        src='/assets/postbox.png'
                        layout='fixed'
                        width={120}
                        height={120}
                    />
                    <Image
                        priority
                        alt='Переключатель (вкл.)'
                        src='/assets/partying-face.png'
                        layout='fixed'
                        width={120}
                        height={120}
                    />
                </EmogiContainer>
            </ContactBlock>
        </Layout>
    );
};

export default Home;
