import Breadcrumbs from '@/components/ui/breadcrumbs'

export default function SettingsPage() {
  return (
    <div className="space-y-2 mb-6">
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <span className="text-sm text-muted-foreground">Application Settings</span>
      </div>

      <h1 className="text-2xl font-semibold">Settings</h1>

      {/* Page content here */}
      <p className="text-muted-foreground">Manage system configurations and preferences here.</p>
    </div>
  )
}
