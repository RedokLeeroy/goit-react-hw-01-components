import { Section } from "./Section/Section";
import features from "../components/data/features"
import { FeaturesGallery } from "./FeaturesGallery/Gallery";
export const App = () => {
  return <Section>
    <FeaturesGallery data={features}/>
  </Section>
};
