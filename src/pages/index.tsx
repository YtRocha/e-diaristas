import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={
                    "Preencha seu endereço e veja todos os profissionais da sua loca"
                }
            />

            <UserInformation
                name={"Ytallo"}
                picture={"https://github.com/YtRocha.png"}
                rating={3}
                description={"Aracaju"}
            />
        </div>
    );
};

export default Home;
