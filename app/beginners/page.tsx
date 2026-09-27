import ProgramPage, { programmeContent, programmeMetadata } from '../ProgramPage';

export const dynamic = 'force-static';
export const metadata = programmeMetadata('beginners');
export default function Page() { return <ProgramPage programme={programmeContent.beginners} />; }
