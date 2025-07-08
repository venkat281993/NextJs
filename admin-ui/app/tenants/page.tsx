import fs from 'fs'
import path from 'path'
import TenantTable from '@/components/ui/tenant-table'
import Breadcrumbs from '@/components/ui/breadcrumbs'

export default function TenantsPage() {
  const filePath = path.join(process.cwd(), 'app/tenants/data/tenants.json')
  const data = fs.readFileSync(filePath, 'utf-8')
  const tenants = JSON.parse(data)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <span className="text-sm text-muted-foreground">Tenant List</span>
      </div>

      <h1 className="text-2xl font-semibold">Tenants</h1>
      <TenantTable tenants={tenants} />
    </div>
  )
}
