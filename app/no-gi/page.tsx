import ProgramPage, { programmeContent, programmeMetadata } from '../ProgramPage';

export const dynamic = 'force-static';
export const metadata = programmeMetadata('no-gi');
export default function Page() { return <ProgramPage programme={programmeContent['no-gi']} />; }
