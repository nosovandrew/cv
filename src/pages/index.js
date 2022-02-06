import styled from 'styled-components';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { NextSeo } from 'next-seo';
import download from 'downloadjs';

import { media } from '@/styles/media';
import Layout from '@/components/layout';
import Block from '@/components/block';
import { TextBlock } from '@/components/text';
import { UnorderedList } from '@/components/list';
import SkillsItem from '@/components/skillsItem';
import Switcher from '@/components/switcher';
import { AnchorButton, Button } from '@/components/button';

import { getProjectCoverPaths } from '@/lib/images';

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

// work experience blocks <<< START >>>

const ExperienceBlock = styled(Block)`
    & > div {
        margin-bottom: var(--basic-spacing);
    }
`;

const StyledCoverVideo = styled.video`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: calc(var(--basic-spacing) / 2);
`;

const VideoCard = styled(StyledCoverVideo)`
    @media ${media.md} {
        width: 400px;
        max-height: 600px;
    }
`;

const ExperienceBlockText = styled.div`
    margin-top: var(--basic-spacing);

    h3 {
        color: var(--text-primary);
    }

    a {
        color: var(--text-primary);
    }

    @media ${media.md} {
        margin: 0;
        margin-left: var(--basic-spacing);
        width: 80%;
    }
`;

const TelegramBotContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
    }
`;

const EightiesContainer = styled.div`
    display: flex;
    flex-direction: column;

    .image-wrapper {
        width: 100%;
        height: auto;

        img {
            border-radius: calc(var(--basic-spacing) / 2);
        }
    }
`;

const WebnosContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
    }
`;

const IotContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
    }
`;

const LotosContainer = styled.div`
    display: flex;
    flex-direction: column;

    .image-wrapper {
        width: 100%;
        height: auto;

        img {
            border-radius: calc(var(--basic-spacing) / 2);
        }
    }
`;

const MediatorContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media ${media.md} {
        flex-direction: row;
    }

    .image-wrapper {
        width: 100%;
        height: auto;

        @media ${media.md} {
            width: 400px;
        }

        img {
            border-radius: calc(var(--basic-spacing) / 2);
        }
    }
`;

const UgsesContainer = styled.div`
    display: flex;
    flex-direction: column;

    .image-wrapper {
        width: 100%;
        height: auto;

        img {
            border-radius: calc(var(--basic-spacing) / 2);
        }
    }
`;

// work experience blocks <<< END >>>

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

// get base64 placeholder for expereince item image
export const getStaticProps = async () => {
    const paths = getProjectCoverPaths(); // images paths array
    // get blur for each image
    const imagesWithBlur = paths.map(async (item) => {
        const { base64, img } = await getPlaiceholder(item.path);
        return {
            filename: item.filename,
            ...img,
            blurDataURL: base64,
        };
    });

    return {
        props: {
            images: await Promise.all(imagesWithBlur),
        },
    };
};

const Home = ({ images }) => {
    return (
        <Layout>
            <NextSeo
                title='Носов & Web'
                description='Всем привет! Меня зовут Андрей, я занимаюсь web-разработкой и дизайном, также мне интересно направление Internet of Things (дипломный проект в магистратуре). Максимально открыт для сотрудничества!'
            />
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
                    Привет! Мне 24, делаю web-сайты и дизайн, также интересуюсь
                    направлением IoT (дипломный проект в магистратуре). Есть
                    опыт создания цельных web-продуктов в рамках организованной
                    мною web-студии. Уделяю особое внимание дизайну, стараясь с
                    его помощью достичь поставленных задач.
                </TextBlock>
                <AnchorButton href='#contact'>Контакты</AnchorButton>
            </FirstBlock>
            <Block>
                <h2>Образование</h2>
                <UnorderedList>
                    <li>
                        <p>2015-2019: УрФУ (Екб)</p>
                        <p>
                            Бакалавриат: “Информационные системы и технологии”
                        </p>
                        <p>
                            Диплом: “Вычисление размеров объекта с помощью
                            камер”
                        </p>
                    </li>
                    <li>
                        <p>2017-2018: Яндекс (Екб)</p>
                        <p>Курсы по фронтенду в УрФУ</p>
                    </li>
                    <li>
                        <p>2019-2021: Университет ИТМО (СПб)</p>
                        <p>Магистратура “Вычислительные системы и сети”</p>
                        <p>
                            Диплом: “Выбор оптимальной технологической платформы
                            для IoT-систем”
                        </p>
                    </li>
                </UnorderedList>
            </Block>
            <ExperienceBlock>
                <h2>Опыт работы</h2>
                <WebnosContainer>
                    <VideoCard autoPlay muted loop>
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638249272/nosov-cv/webnos_vk18wy.webm'
                            type='video/webm'
                        />
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638249272/nosov-cv/webnos_wrwwuj.mp4'
                            type='video/mp4'
                        />
                    </VideoCard>
                    <ExperienceBlockText>
                        <h3>Студия Webnos</h3>
                        <a
                            href='https://webnos.online'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            жми чтобы посмотреть
                        </a>
                        <p>
                            Моя web-студия, запущена в октябре 2020. Занимаюсь
                            разработкой и дизайном web-продуктов. На данный
                            момент стараюсь больше работать в направлении
                            e-commerce.
                        </p>
                    </ExperienceBlockText>
                </WebnosContainer>
                <IotContainer>
                    <VideoCard autoPlay muted loop>
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638344766/nosov-cv/iot_zkhet6.webm'
                            type='video/webm'
                        />
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638344766/nosov-cv/iot_h3gvai.mp4'
                            type='video/mp4'
                        />
                    </VideoCard>
                    <ExperienceBlockText>
                        <h3>Internet of Things</h3>
                        <p>
                            Магистратура в ИТМО. Справочник по выбору
                            оптимального протокола прикладного уровня для
                            IoT-системы с опредленными свойствами.{' '}
                            <a
                                href='https://github.com/nosovandrew/iot-app-layer-guide'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Смотреть проект.
                            </a>
                        </p>
                        <p>
                            В ходе работы строил простейшие системы, благодаря
                            которым познакомился с популярными протоклами, а
                            также некоторым аппаратным обеспечением.
                        </p>
                    </ExperienceBlockText>
                </IotContainer>
                <EightiesContainer>
                    <div className='image-wrapper'>
                        <Image
                            alt='Магазин 80 Religion'
                            src='/assets/experience/eighties-cover.png'
                            layout='intrinsic'
                            width={1800}
                            height={1350}
                            placeholder='blur'
                            blurDataURL={
                                images.find(
                                    (item) => item.filename === 'eighties-cover'
                                ).blurDataURL
                            }
                        />
                    </div>
                    <ExperienceBlockText style={{ margin: 0 }}>
                        <h3>
                            Магазин 80{' '}
                            <a
                                href='https://eighties.vercel.app'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                жми чтобы посмотреть
                            </a>
                        </h3>
                    </ExperienceBlockText>
                </EightiesContainer>
                <TelegramBotContainer>
                    <VideoCard autoPlay muted loop>
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638177851/nosov-cv/crmbot_pexm4w.webm'
                            type='video/webm'
                        />
                        <source
                            src='https://res.cloudinary.com/nosov/video/upload/v1638177851/nosov-cv/crmbot_fg4tbu.mp4'
                            type='video/mp4'
                        />
                    </VideoCard>
                    <ExperienceBlockText>
                        <h3>Telegram-бот</h3>
                        <a
                            href='https://webnos.online/work/crmbot'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            жми чтобы посмотреть
                        </a>
                        <p>
                            Разработан для получения уведомлений о новых заявках
                            из формы с сайта в Telegram-мессенджер. Используется
                            в собственных проектах.
                        </p>
                    </ExperienceBlockText>
                </TelegramBotContainer>
                <LotosContainer>
                    <div className='image-wrapper'>
                        <Image
                            alt='Стартап LotosLab'
                            src='/assets/experience/lotos-cover.png'
                            layout='intrinsic'
                            width={1801}
                            height={1350}
                            placeholder='blur'
                            blurDataURL={
                                images.find(
                                    (item) => item.filename === 'lotos-cover'
                                ).blurDataURL
                            }
                        />
                    </div>
                    <ExperienceBlockText style={{ margin: 0 }}>
                        <h3>
                            Стартап LotosLab{' '}
                            <a
                                href='https://lotoslab.ru/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                жми чтобы посмотреть
                            </a>
                        </h3>
                    </ExperienceBlockText>
                </LotosContainer>
                <MediatorContainer>
                    <div className='image-wrapper'>
                        <Image
                            alt='Юр. компания Mediator'
                            src='/assets/experience/mediator-cover.png'
                            layout='intrinsic'
                            width={901}
                            height={900}
                            placeholder='blur'
                            blurDataURL={
                                images.find(
                                    (item) => item.filename === 'mediator-cover'
                                ).blurDataURL
                            }
                        />
                    </div>
                    <ExperienceBlockText>
                        <h3>Юр. компания Mediator</h3>
                        <p>
                            Сотрудничаем с апреля 2021. Сделано несколько
                            лендингов, а также в работе находится{' '}
                            <a
                                href='https://mediator-search.vercel.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                сервис
                            </a>{' '}
                            по поиску юридических документов.
                        </p>
                    </ExperienceBlockText>
                </MediatorContainer>
                <UgsesContainer>
                    <div className='image-wrapper'>
                        <Image
                            alt='Сайт для частного дезинфекционного предприятия "Юг СЭС"'
                            src='/assets/experience/ugses-cover.png'
                            layout='intrinsic'
                            width={1801}
                            height={1350}
                            placeholder='blur'
                            blurDataURL={
                                images.find(
                                    (item) => item.filename === 'ugses-cover'
                                ).blurDataURL
                            }
                        />
                    </div>
                    <ExperienceBlockText style={{ margin: 0 }}>
                        <h3>
                            Сайт для Юг СЭС{' '}
                            <a
                                href='https://demo-disinfection.netlify.app/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                жми чтобы посмотреть
                            </a>
                        </h3>
                    </ExperienceBlockText>
                </UgsesContainer>
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
                <h2 id='contact'>Контакты</h2>
                <a href='mailto:drenosov@gmail.com'>drenosov@gmail.com</a>
                <a href='tel:+79920201025'>+7-992-020-10-25</a>
                <a href='https://t.me/andrewnosov'>TG@andrewnosov</a>
                <EmogiContainer>
                    <Image
                        priority
                        alt='Кладем письмо в почтовый ящик.'
                        src='/assets/postbox.png'
                        layout='fixed'
                        width={80}
                        height={80}
                    />
                    <Image
                        priority
                        alt='Радуемся!'
                        src='/assets/partying-face.png'
                        layout='fixed'
                        width={80}
                        height={80}
                    />
                </EmogiContainer>
                <Button
                    onClick={() =>
                        download(`${process.env.HOST}/files/nosov_cv.pdf`)
                    }
                >
                    Скачать резюме в .pdf
                </Button>
            </ContactBlock>
        </Layout>
    );
};

export default Home;
