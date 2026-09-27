import ProgramPage, { programmeContent, programmeMetadata } from '../ProgramPage';

export const dynamic = 'force-static';
export const metadata = programmeMetadata('jitzjudo');
export default function Page() { return <ProgramPage programme={programmeContent.jitzjudo} />; }
